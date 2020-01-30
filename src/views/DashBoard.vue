<template>
  <div style="width:1380px;margin:10px auto;">
    <div class="titleText">直播中</div>
    <el-row :gutter="10">
      <el-col v-if="liveings.length<=0" :span="24" class="cardBoxBorder">
        <div class="cardBox cardBox-nomsg">暂无数据</div>
      </el-col>
      <el-col v-for="(claz,index) in liveings" :key="index" class="cardBoxBorder">
        <a :href="claz.liveURL" target="_blank" @click="saveLievCredis(0,claz.meetingId)">
          <div class="cardBox" :class="judgeBgColor(claz)">
            <el-row>
              <el-col :span="7" class="titleLeft">名称：</el-col>
              <el-col :span="12" class="contentRight">{{claz.liveTopic}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="7" class="titleLeft">老师：</el-col>
              <el-col :span="12" class="contentRight">{{claz.teacherName}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="7" class="titleLeft">时间：</el-col>
              <el-col :span="12" class="contentRight">{{claz.time}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="7" class="titleLeft">状态：</el-col>
              <el-col :span="12" class="contentRight">{{claz.liveZt}}</el-col>
            </el-row>
          </div>
        </a>
      </el-col>
    </el-row>
    <!--科目-->
    <el-row style="margin-top:15px;">
      <el-col :span="24">
        <el-tabs
          type="card"
          @tab-click="showSubjectData"
          v-model="defaultActiveTab"
          ref="classItemsTab"
          stretch="true"
          id="classItemsTab"
        >
          <el-tab-pane
            :label="subject.value"
            :name="subject.key"
            v-for="(subject) in subjects"
            :key="subject.key"
            style="margin-top:-10px;"
          >
            <div class="titleText">待开播</div>
            <el-row :gutter="10">
              <el-col v-if="unLives.length<=0" class="cardBoxBorder">
                <div class="cardBox cardBox-nomsg" :class="subject.key+'Bg'">暂无数据</div>
              </el-col>
              <el-col v-for="(claz,index) in unLives" :key="index" class="cardBoxBorder">
                <a href="javascript:;" @click="checkTime(claz,index)" :id="index">
                  <div class="cardBox" :class="subject.key+'Bg'">
                    <el-row>
                      <el-col :span="7" class="titleLeft">名称：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.liveTopic}}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="7" class="titleLeft">老师：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.teacherName}}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="7" class="titleLeft">时间：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.bt}}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="7" class="titleLeft">状态：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.liveZt}}</el-col>
                    </el-row>
                  </div>
                </a>
              </el-col>
            </el-row>
            <div class="titleText">观看回放</div>

            <el-row :gutter="10">
              <el-col v-if="endLives.length<=0" class="cardBoxBorder">
                <div class="cardBox cardBox-nomsg" :class="subject.key+'Bg'">暂无数据</div>
              </el-col>
              <el-col v-for="(claz,index) in endLives" :key="index" class="cardBoxBorder">
                <a :href="claz.liveURL" target="_blank" @click="saveLievCredis(1,claz.meetingId)">
                  <div class="cardBox" :class="subject.key+'Bg'">
                    <el-row>
                      <el-col :span="7" class="titleLeft">名称：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.liveTopic}}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="7" class="titleLeft">老师：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.teacherName}}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="7" class="titleLeft">时间：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.bt}}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="7" class="titleLeft">状态：</el-col>
                      <el-col :span="12" class="contentRight">{{claz.liveZt}}</el-col>
                    </el-row>
                  </div>
                </a>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      defaultActiveTab: "",
      unLives: [], //未开始直播
      liveings: [], //正在直播
      endLives: [], //结果直播
      subjects: [], //开播科目
      allLive: [],
      showClasses: [],
      liveStatus: {
        "0": "待直播",
        "1": "直播中",
        "2": "观看回放"
      },
      dynacInterval: null
    };
  },
  methods: {
  judgeBgColor(data){
    // console.log(data);
    // console.log(this.subjects);
    for(var s of this.subjects){
      if(s.value == data.subject){
        return s.key + "Bg";
      }
    }
  },
    checkTime(row, index) {
      //target="_blank"
      let ct = parseInt(new Date().getTime() / 1000);
      if (ct - 15*60 < parseInt(row.beginTime)) {
        this.$message({
          message: "请于" + row.bt+"观看直播",
          type: "warning"
        });
        return false;
      } else {
        //liveURL;
        var aMark = document.getElementById(index + "");
        aMark.href = row.liveURL;
        aMark.target = "_blank";
        aMark.click();
      }
    },
    showSubjectData(tab, event) {
      let subjectName = tab.name;
      this.getSubjectClaz(subjectName);
    },
    getSubjectClaz(subjectName) {
      let _this = this;
      _this.unLives = [];
      _this.endLives = [];
      let subjectClass = _this.allLive[subjectName];
      subjectClass.forEach(row => {
        // liveStatus=0
        if (row.liveStatus === 0) {
          row.liveZt = "待开播";
          row.bt = _this.utils.formatDate(row.beginTime);
          _this.unLives.push(row);
        }
        if (row.liveStatus === 2) {
          row.liveZt = "观看回放";
          row.bt = _this.utils.formatDate(row.beginTime);
          _this.endLives.push(row);
        }
      });
    },
    async getLiveClassData() {
      let _this = this;
      const studentId = _this.$store.getters["loginStore/getStudentId"];
      const result = await _this.$store.dispatch("liveStore/getLiveClassData", {
        studentId: studentId
      });
      if (result.success) {
        const data = result.data;
        _this.subjects = data.subject;
        _this.allLive = data.allLive;
        _this.defaultActiveTab = _this.subjects[0].key;
        _this.getSubjectClaz(_this.subjects[0].key);
        _this.liveings = [];
        const liveingsClass = data.living;
        if (liveingsClass != null && liveingsClass.length > 0) {
          liveingsClass.forEach(row => {
            row.liveZt = "直播中";
            let bt = _this.utils.formatDate(row.beginTime);
            let ed = _this.utils.formatDate(row.endTime).substring(6);
            row.time = bt + "-" + ed;
            _this.liveings.push(row);
          });
        }
      } else {
        _this.$message.error("暂无数据");
      }
    },
    dyncResfresh() {
      let _this = this;
      _this.dynacInterval = setInterval(function() {
        _this.getLiveClassData();
      }, 1000 * 60);
    },
    async saveLievCredis(liveStatus, meetingId) {
      let _this = this;
      let userId = _this.$store.getters["loginStore/getStudentId"];
      const result = await _this.$store.dispatch("liveStore/saveLievCredis", {
        userid: userId,
        type: liveStatus,
        meetingId: meetingId
      });
      if (result.success) {
        _this.$message({
          type: "success",
          message: result.msg
        });
      }
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "";

    let _this = this;
    _this.getLiveClassData();
    _this.dyncResfresh();
    _this.$nextTick(() => {
      let tabs = _this.$refs.classItemsTab;
    });
  },
  beforeDestroy() {
    clearInterval(this.dynacInterval);
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 5px;
}
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #000;
}
.titleLeft {
  text-align: right;
}
.contentRight {
  text-align: left;
}

.cardBoxBorder{
  width: 250px;
}
.cardBox {
  border-radius: 10px;
  /* 在这改暂无数据且没有学科的背景色 */
  background-color: #008f59;
  color: #fff;
  font-size: 12px;
  line-height: 26px;
  margin: 5px 0;
  padding: 7px;
}
.cardBox-nomsg{
  text-align: center;
  font-size: 30px;
  line-height: 100px;
  /* margin: 20px; */
}
/* 各科背景色 */
.chineseBg {
  background-color: #ff9c3a;
}
.mathBg {
  background-color: #008E57;
}
.geographyBg {
  background-color: #00489D;
}
.chemistryBg {
  background-color: #00A4C5;
}
.wenzongBg {
  background-color: #ff9c3a;
}
.physicsBg {
  background-color: #00489D;
}
.englishBg {
  background-color: #5A4398;
}
.politicsBg {
  background-color: #ff9c3a;
}
.historyBg {
  background-color: #af6338;
}
.biologyBg {
  background-color: #a7c77d;
}
.othersBg {
  background-color: #af6338;
}
/* 标题样式 */
.titleText {
  /* background-color: #000; */
  color: #01764A;
  border-bottom: 4px solid #008F59;
  margin: 6px 0 2px 2px;
  padding: 0 10px;
  line-height: 25px;
  display: inline-block;
}
</style>