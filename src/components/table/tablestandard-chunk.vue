<template>
  <el-table
    :data="tableData"
    stripe
    highlight-current-row
    :default-sort = "{prop: 'date', order: 'descending'}"
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      :align="Align"
      width="80">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      :align="Align"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      :align="Align"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      :align="Align"
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "tablestandard-chunk",
    data() {
      return {
        tableData: [
          {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
          },
          {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
          },
          {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
          },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        Align:"center"
      }
    },
    methods:{
      handleCurrentChange(currentRow,oldCurrentRow){
        console.log(currentRow,oldCurrentRow)
      }
    }
  }
</script>

<style scoped>

</style>
