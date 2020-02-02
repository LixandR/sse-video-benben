<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee;" class="my-container">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" default-active="1-1">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-upload"></i>初中数学
            </template>
            <el-menu-item-group>
              <template slot="title">七年级</template>
              <el-menu-item index="1-1" @click="getLiveClassData(18)">七年级(上)</el-menu-item>
              <el-menu-item index="1-2" @click="getLiveClassData(34)">七年级(下)</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">八年级</template>
              <el-menu-item index="1-3" @click="getLiveClassData(36)">八年级(上)</el-menu-item>
              <el-menu-item index="1-4" @click="getLiveClassData(35)">八年级(下)</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">九年级</template>
              <el-menu-item index="1-5" @click="getLiveClassData(37)">九年级(上)</el-menu-item>
              <el-menu-item index="1-6" @click="getLiveClassData(38)">九年级(下)</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-upload"></i>初中英语
            </template>
            <el-menu-item-group>
              <template slot="title">七年级</template>
              <el-menu-item index="2-1" @click="getLiveClassData(110)">七年级(上)</el-menu-item>
              <el-menu-item index="2-2" @click="getLiveClassData(111)">七年级(下)</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">八年级</template>
              <el-menu-item index="2-3" @click="getLiveClassData(112)">八年级(上)</el-menu-item>
              <el-menu-item index="2-4" @click="getLiveClassData(113)">八年级(下)</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">九年级</template>
              <el-menu-item index="2-5" @click="getLiveClassData(114)">九年级</el-menu-item>
              <!-- <el-menu-item index="2-6" @click="getLiveClassData(18)">九年级(下)</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-upload"></i>初中物理
            </template>
            <el-menu-item-group>
              <template slot="title">八年级</template>
              <el-menu-item index="3-3" @click="getLiveClassData(19)">八年级(上)</el-menu-item>
              <el-menu-item index="3-4" @click="getLiveClassData(23)">八年级(下)</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">九年级</template>
              <el-menu-item index="3-5" @click="getLiveClassData(33)">九年级(上)</el-menu-item>
              <!-- <el-menu-item index="3-6" @click="getLiveClassData(18)">九年级(下)</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-upload"></i>初中化学
            </template>
            <el-menu-item-group>
              <template slot="title">九年级</template>
              <el-menu-item index="4-5" @click="getLiveClassData(1  1)">九年级(上)</el-menu-item>
              <el-menu-item index="4-6" @click="getLiveClassData(12)">九年级(下)</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <el-table :data="tableDate">
            <el-table-column align="center" prop="name" label="类型" width="300px"></el-table-column>
            <el-table-column prop="desc" align="center" label="名称" width="300px"></el-table-column>
            <el-table-column label="操作" prop="" align="center">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import liveApi from "@/api/liveApi";
export default {
  name: "DashBoard",
  data() {
    return {
      defaultActiveTab: "",
      dynacInterval: null,
      tableDate: []
    };
  },
  methods: {
    async getLiveClassData(id) {
      let _this = this;
      console.log(id);
      liveApi
        .findVideos({ id: id })
        .then(response => {
          console.log(response);
          _this.tableDate = response;
        })
        .catch(() => {});
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].className = "";

    let _this = this;
    _this.getLiveClassData(18);
    // _this.dyncResfresh();
    _this.$nextTick(() => {
      let tabs = _this.$refs.classItemsTab;
      document.getElementsByClassName("my-container")[0].style.height =
        document.documentElement.clientHeight + "px";
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

.cardBoxBorder {
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
.cardBox-nomsg {
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
  background-color: #008e57;
}
.geographyBg {
  background-color: #00489d;
}
.chemistryBg {
  background-color: #00a4c5;
}
.wenzongBg {
  background-color: #ff9c3a;
}
.physicsBg {
  background-color: #00489d;
}
.englishBg {
  background-color: #5a4398;
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
  color: #01764a;
  border-bottom: 4px solid #008f59;
  margin: 6px 0 2px 2px;
  padding: 0 10px;
  line-height: 25px;
  display: inline-block;
}
</style>