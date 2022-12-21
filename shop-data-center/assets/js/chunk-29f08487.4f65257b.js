(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29f08487"],{2077:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"shop-profit-report"},[e("div",{staticClass:"banner-container"},[e("Banner")],1),e("div",{staticClass:"search-container"},[e("SearchForm",{ref:"searchForm",on:{"on-search":t.handleQuery,"on-export":t.handleExport}})],1),e("div",{staticClass:"table-container"},[e("Table",{attrs:{loading:t.loading,columns:t.listCols,data:t.tableData,setColumn:!0,option:t.tableOption},on:{"sort-change":t.handleSortChange,"row-dblclick":t.handleRowDblclickCheckFinanceDetail},scopedSlots:t._u([{key:"profit",fn:function(a){return[e("span",{class:[a.row.profit>0?"":"text-cyan"]},[t._v(" "+t._s(t.processNum(a.row.profit))+" ")])]}},{key:"action",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClickCheckFinanceDetail(a.row)}}},[t._v("详情")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClickExportFinanceDetail(a.row)}}},[t._v("导出")])]}}])})],1),e("Pagination",{ref:"pagination",attrs:{total:t.total},on:{"on-page-change":t.handleQuery,"on-page-size-change":t.handleQuery}}),e("ShopFinanceDetailWin",{ref:"shopFinanceDetailWin"})],1)},i=[],o=a("c7eb"),r=a("1da1"),s=a("5530"),p=(a("d81d"),a("4e82"),a("d3b7"),a("159b"),a("a9e3"),a("13d5"),a("b680"),a("fa7d")),c={checked:!0,fixed:!1,sortable:"custom",headerAlign:"center",showOverflowTooltip:!0,minWidth:80,align:"right",toString:!1,toolTip:"",subTooltip:"",class:"",subClass:"",subProp:"",trend:"",icon:"el-icon-question",process:function(t){return isNaN(t)?t:Object(p["h"])(t)},subProcess:function(t){return(isNaN(t)?t+"%":Object(p["h"])(t))+"%"},disabled:!1},l=[{prop:"syb_title",title:"线上事业群",align:"left",minWidth:180,tooltip:"所属事业群",disabled:!0,fixed:!0,sortable:!1},{fixed:!0,prop:"syq_title",title:"平台事业群",tooltip:"所属事业部",align:"left",minWidth:120,sortable:!1,disabled:!0},{fixed:!0,prop:"shop_name",minWidth:120,title:"店铺",tooltip:"店铺",align:"left",sortable:!1,disabled:!0},{prop:"date",title:"时间",tooltip:"时间",align:"center",minWidth:110,disabled:!0},{prop:"sale_amount",title:"销售额",tooltip:"根据配货时间，统计（待反馈，反馈成功，待退货，待退款，反馈失败）订单金额",minWidth:120,disabled:!0},{slotName:"profit",prop:"profit",subProp:"profit_pro",title:"利润 | 利润率",tooltip:"（毛利额 - 费用总计）|（利润 / 销售额）",process:function(t){return""},minWidth:160,subClass:"text-orange"},{prop:"rebate_amount",title:"返利金额",tooltip:"返利",minWidth:120,sortable:"custom"},{prop:"cost_amount",title:"货品成本",tooltip:"平台成本",minWidth:130},{prop:"gross_profit",subProp:"gross_profit_pro",title:"毛利 | 毛利率",tooltip:"（销售额 - 货品成本）|（毛利额 / 销售额）",minWidth:160,subClass:"text-orange"},{prop:"all_expenses",subProp:"all_expenses_pro",title:"费用合计 | 费用率",tooltip:"（平台佣金 + 平台营销费用 + 平台其他费用 + 线下打款营销费用 + 配发费 + 退货费用 + 其他费用 + 人员成本 + 管理费用 + 资金成本）|（费用总计 / 销售额）",minWidth:180,subClass:"text-orange"},{prop:"plat_commissions",subProp:"plat_commissions_pro",title:"平台佣金 | 占比",tooltip:"（平台扣点佣金）|【（平台扣费 - 佣金）/ 销售额】",minWidth:160,subClass:"text-orange"},{prop:"plat_marketing_expenses",subProp:"plat_marketing_expenses_pro",title:"平台营销费用 | 占比",tooltip:"（如首单拉新、淘宝客佣金、聚划算参团费、达人佣金、京豆等通过账单扣费的营销费用）|【（平台扣费 - 营销费用） / 销售额】",minWidth:200,subClass:"text-orange"},{prop:"plat_other_expenses",subProp:"plat_other_expenses_pro",title:"平台其他费用 | 占比",tooltip:"（运费险、返点积分、花呗信用卡手续费等通过账单扣费的其他费用）|【（平台扣费 - 其他费用）/ 销售额】",minWidth:200,subClass:"text-orange"},{prop:"marketing_expenses",subProp:"marketing_expenses_pro",title:"线下打款营销费用 | 占比",tooltip:"（线下打款的快车、直通车等用于引流的流量购买）|【（线下打款 - 营销费用）/ 销售额】",minWidth:220,subClass:"text-orange"},{prop:"post_expenses",subProp:"post_expenses_pro",title:"配发费 | 占比",tooltip:"（天马运动平台资费标准）|（配发费 / 销售额）",minWidth:160,subClass:"text-orange"},{prop:"return_expenses",subProp:"return_expenses_pro",title:"退货费用 | 占比",tooltip:"（超过退货标准的，17元/件，不含配）|（退货费用 / 销售额）",minWidth:160,subClass:"text-orange"},{prop:"other_expenses",subProp:"other_expenses_pro",title:"其他费用 | 占比",tooltip:"（售后补偿、设计费、办公费等支出）|（其他费用 / 销售额）",minWidth:160,subClass:"text-orange"},{prop:"labor_cost_expenses",subProp:"labor_cost_expenses_pro",title:"人工成本 | 占比",tooltip:"（人工成本 + 福利费）|（人工成本 / 销售额）",minWidth:160,subClass:"text-orange"},{prop:"manage_expenses",subProp:"manage_expenses_pro",title:"管理费用 | 占比",tooltip:"（现货仓4个点，外仓6个点）|（管理费用 / 销售额）",minWidth:160,subClass:"text-orange"},{prop:"interest_expenses",subProp:"interest_expenses_pro",title:"资金利息 | 占比",tooltip:"（月利1%，计费依据是充值到平台账号的信贷金额）|（资金成本 / 销售额）",minWidth:160,subClass:"text-orange"},{prop:"shop_people_nums",title:"店铺人数",icon:"",minWidth:110},{prop:"shopowner",title:"负责人",icon:"",sortable:!1},{prop:"team",title:"战队",icon:"",sortable:!1},{prop:"finance_maintainer",title:"财务",icon:"",sortable:!1},{slotName:"action",prop:"action",title:"操作",fixed:"right",minWidth:100,icon:"",align:"center",sortable:!1}],m=a("a535"),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-form"},[e("el-form",{ref:"form",attrs:{model:t.form,size:"small",inline:""}},[e("el-form-item",{attrs:{label:"店铺："}},[e("el-select",{staticStyle:{width:"220px"},attrs:{clearable:"",multiple:"",filterable:"","collapse-tags":"",placeholder:"请选择店铺，可搜索，可多选"},model:{value:t.form.shopIdArr,callback:function(e){t.$set(t.form,"shopIdArr",e)},expression:"form.shopIdArr"}},t._l(t.shopOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(a.label))]),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e("el-tag",{attrs:{effect:"plain",type:t.shopOptionType[a.type].btnType}},[t._v(t._s(t.shopOptionType[a.type].itemLabel))])],1)])})),1),e("el-button-group",[e("el-button",{attrs:{type:"warning"},on:{click:t.onClearShopSelect}},[t._v("清空")]),e("el-button",{attrs:{type:"primary"},on:{click:t.onSelectAllShop}},[t._v("全选")])],1)],1),e("el-form-item",{attrs:{label:"时间："}},[e("el-radio-group",{model:{value:t.form.timeFrame,callback:function(e){t.$set(t.form,"timeFrame",e)},expression:"form.timeFrame"}},[e("el-radio-button",{attrs:{label:"day"}},[t._v("日")]),e("el-radio-button",{attrs:{label:"month"}},[t._v("月")])],1),e("span",{directives:[{name:"show",rawName:"v-show",value:"month"===t.form.timeFrame,expression:"form.timeFrame === 'month'"}],staticClass:"monthSelect"},[e("el-date-picker",{staticStyle:{width:"250px"},attrs:{type:"monthrange","range-separator":"~","value-format":"yyyy-MM-dd",format:"yyyy年MM月","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),e("span",{directives:[{name:"show",rawName:"v-show",value:"day"===t.form.timeFrame,expression:"form.timeFrame === 'day'"}],staticClass:"daySelect"},[e("el-date-picker",{staticStyle:{width:"270px"},attrs:{type:"daterange","range-separator":"~","value-format":"yyyy-MM-dd",format:"yyyy年MM月dd日","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),e("el-button",{attrs:{type:"warning"},on:{click:t.onClearDateSelect}},[t._v("清空")])],1),e("el-form-item",{attrs:{label:"财务："}},[e("el-select",{staticStyle:{width:"150px"},attrs:{clearable:"",multiple:"",filterable:"","collapse-tags":"",placeholder:"请选择财务"},model:{value:t.form.maintainerArr,callback:function(e){t.$set(t.form,"maintainerArr",e)},expression:"form.maintainerArr"}},t._l(t.maintainerOptions,(function(t){return e("el-option",{key:t.finance_maintainer,attrs:{label:t.finance_maintainer,value:t.finance_maintainer}})})),1)],1),e("el-form-item",[e("el-checkbox",{model:{value:t.form.isSplit,callback:function(e){t.$set(t.form,"isSplit",e)},expression:"form.isSplit"}},[t._v("分"+t._s("day"===t.form.timeFrame?"日":"月")+"报告")])],1),e("el-form-item",[e("el-button-group",[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onSearch}},[t._v("查询")]),e("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.onExport}},[t._v("导出")])],1)],1)],1)],1)},h=[],d=(a("fb6a"),a("a15b"),a("b0c0"),a("2f62")),f=a("cd05"),b=a("ed08"),g=[{text:"当日",onClick:function(t){var e=new Date,a=new Date;t.$emit("pick",[a,e])}},{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}],_={1:{btnType:"primary",itemLabel:"店铺"},2:{btnType:"success",itemLabel:"事业群"},3:{btnType:"warning",itemLabel:"直播"}},y={name:"SearchForm",mounted:function(){this.init()},data:function(){return{form:{shopIdArr:[],maintainerArr:[],timeFrame:"day",date:[],isSplit:!0},pickerOptions:{shortcuts:g},shopOptionType:_}},computed:Object(s["a"])({},Object(d["c"])({shopOptions:"finance/shopOptions",noticeList:"finance/noticeList",maintainerOptions:"finance/maintainerOptions"})),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])({setShopOptions:"finance/setShopOptions",setNoticeList:"finance/setNoticeList",setMaintainerOptions:"finance/setMaintainerOptions"})),{},{init:function(){Object(p["e"])(this.shopOptions)?this.getShopOptions():1==this.shopOptions.length&&"day"===this.form.timeFrame?this.searchSingleShopFinance(this.shopOptions[0]):this.shopOptions.length>1&&"day"===this.form.timeFrame&&this.onSearchToday(),Object(p["e"])(this.maintainerOptions)&&this.getMaintainerOptions(),Object(p["e"])(this.noticeList)&&this.getNoticeList()},getFormData:function(){return Object(s["a"])({},this._getFormData())},onSelectAllShop:function(){var t=this.shopOptions.map((function(t){return t.value}));this.form.shopIdArr=t},onSelectAllMaintainer:function(){this.form.maintainerArr=this.maintainerOptions.map((function(t){return t.finance_maintainer}))},onClearShopSelect:function(){this.form.shopIdArr=[]},onClearDateSelect:function(){this.form.date=[]},onClearMaintainerSelect:function(){this.form.maintainerArr=[]},onFilterByMaintainer:function(){this.$emit("on-change-maintainer",this.form.maintainerArr)},onSearch:function(){this.$emit("on-search",this._getFormData())},onSearchToday:function(){this.form.timeFrame="day";var t=Object(b["a"])(new Date,"yyyy-MM-dd");this.form.date=[t,t],this.onSearch()},onSearchThisMonth:function(){this.form.timeFrame="month";var t=Object(b["a"])(new Date,"yyyy-MM-dd");this.form.date=[t,t],this.onSearch()},onExport:function(){this.$emit("on-export",this._getFormData())},onExportToday:function(){var t=Object(b["a"])(new Date,"yyyy-MM-dd"),e=this._getFormData();this.$emit("on-export",Object(s["a"])(Object(s["a"])({},e),{},{startDate:t,endDate:t}))},onExportThisMonth:function(){var t=Object(b["a"])(new Date,"yyyy-MM"),e=this._getFormData();this.$emit("on-export",Object(s["a"])(Object(s["a"])({},e),{},{startDate:t,endDate:t}))},_getFormData:function(){var t,e,a=Object.assign({},Object(s["a"])({},this.form));return a.date?["startDate","endDate"].map((function(t,e){a[t]="month"===a.timeFrame?a["date"][e].slice(0,7):a["date"][e]})):(a["startDate"]="",a["endDate"]=""),a["shopId"]=null===(t=this.form.shopIdArr)||void 0===t?void 0:t.join(","),a["maintainers"]=null===(e=this.form.maintainerArr)||void 0===e?void 0:e.join(","),a},getMaintainerOptions:function(){var t=this;Object(f["f"])().then((function(e){t.setMaintainerOptions(e.data)}))},getShopOptions:function(){var t=this;Object(f["l"])().then((function(e){if(200===e.code){var a=e.data.map((function(t){return{value:t.id,label:t.name,type:t.type}}));t.setShopOptions(a),1===a.length&&"day"===t.timeFrame?t.searchSingleShopFinance(a[0]):t.shopOptions.length>1&&"day"===t.form.timeFrame&&t.onSearchToday()}else t.$message.error(e.msg||"初始化店铺信息失败，请重试刷新页面")}))},getNoticeList:function(){var t=this;Object(f["g"])().then((function(e){200==e.code&&(Object(p["e"])(e.data)||t.setNoticeList(e.data))}))},searchSingleShopFinance:function(t){var e=Object(b["a"])(new Date,"yyyy-MM-dd");this.$emit("on-single-shop-search",{shopIdArr:[t.value],timeFrame:"day",date:[e,e]})}})},v=y,x=(a("60ea"),a("2877")),S=Object(x["a"])(v,u,h,!1,null,"eca01752",null),F=S.exports,O=a("38f5"),D=function(){var t=this,e=t._self._c;return e("Win",{ref:"win",attrs:{title:t.title,width:"700px",top:"5vh"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"button-container"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-download",size:"small"},on:{click:t.onExport}},[t._v("导出")])],1),e("div",{staticClass:"table-container"},[e("el-table",{staticStyle:{width:"500px"},attrs:{data:t.tableData,border:"",size:"small","row-key":"id","default-expand-all":"","cell-style":t.getColumnCellStyle,"header-cell-style":t.getHeaderCellStyle,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{prop:"name",label:"指标",width:"300"}}),e("el-table-column",{attrs:{prop:"data",align:"right",label:"金额"}}),e("el-table-column",{attrs:{prop:"percent",align:"right",label:"占比"}})],1)],1)])])},w=[],k=(a("14d9"),a("f2bc")),C=a("398e"),j={name:"ShopFinanceDetailWin",components:{Win:k["a"]},data:function(){return{showTableField:["profit","sale_amount","cost_amount","gross_profit","all_expenses","plat_commissions","plat_marketing_expenses","other_expenses","marketing_expenses","post_expenses","return_expenses","labor_cost_expenses","manage_expenses","interest_expenses","shop_people_nums","shop_funds","plat_other_expenses"],tableData:[],financeFieldTitle:C["a"],baseTitle:"店铺利润详情",shopName:"",date:"",id:0,timeFrame:""}},computed:{title:function(){return"「 "+this.shopName+" "+this.date+" 」"+this.baseTitle}},methods:{open:function(){return this.clear(),this.$refs.win.open(),this},close:function(){this.$refs.win.close()},clear:function(){return this.tableData=[],this},init:function(t){var e=this,a=t.id,n=t.timeFrame;this.id=a,this.timeFrame=n,Object(f["j"])({id:a,timeFrame:n}).then((function(t){200==t.code&&e.setData(t.data)}))},setData:function(t){var e=[];this.shopName=t.shop_name,this.date=t.date;var a=0;this.showTableField.forEach((function(n){a++;var i={};if(i["id"]=a,i["name"]=t.lists[n].title||"",i["data"]="shop_people_nums"!==n?Object(p["e"])(t.lists[n].amount)?0:(+t.lists[n].amount).toFixed(2):t.lists[n].amount+"人",i["percent"]=t.lists[n].pro,t.lists[n].hasOwnProperty("child")&&!Object(p["e"])(t.lists[n].child)){var o=[];t.lists[n].child.forEach((function(t){a++,o.push({id:a,name:t.title?"- "+t.title:"",data:t.amount,percent:t.pro})})),i["children"]=o}e.push(i)})),this.tableData=e},onExport:function(){Object(f["b"])({id:this.id,timeFrame:this.timeFrame})},getColumnCellStyle:function(t){t.row,t.column,t.rowIndex;var e=t.columnIndex;switch(e){case 0:return"color: #ccc; font-size: 16px; border-color: #595959;";default:return"color: #e6db74; border-color: #595959;"}},getHeaderCellStyle:function(t){t.row,t.column,t.rowIndex,t.columnIndex}}},T=j,W=(a("8d07"),Object(x["a"])(T,D,w,!1,null,"419af9e6",null)),z=W.exports,$=a("dc19"),M=a("ac0d"),N={name:"StoreExport",mixins:[M["d"],M["c"]],components:{SearchForm:F,ShopFinanceDetailWin:z,Banner:m["a"],Table:$["a"],Pagination:O["a"]},created:function(){this.listCols=l.map((function(t){return Object(s["a"])(Object(s["a"])({},c),t)}))},data:function(){var t=this;return{loading:!1,tableData:[],original_data:[],timeFrame:"today",activeName:"second",tableOption:{ref:"profitList",key:"profitList",showSummary:!0,summaryMethod:function(e,a){return t.getSummaries(e,a)},tips:"双击行展开详情, 拖动列可改变列顺序"},total:0}},computed:{processNum:function(){return function(t){return Object(p["h"])(t)}}},methods:{handleSortChange:function(t){var e,a=t.prop,n=t.order;if(Object(p["e"])(n))e="";else{var i="descending"===n?"desc":"asc";e=a+"|"+i}this.handleQuery({sort:e})},handleRowDblclickCheckFinanceDetail:function(t,e,a){var n=this,i=this.$refs.searchForm.getFormData();this.$nextTick((function(){n.$refs.shopFinanceDetailWin.open().init({id:t.id,timeFrame:i.timeFrame})}))},handleClickCheckFinanceDetail:function(t){var e=this,a=this.$refs.searchForm.getFormData();this.$nextTick((function(){e.$refs.shopFinanceDetailWin.open().init({id:t.id,timeFrame:a.timeFrame})}))},handleClickExportFinanceDetail:function(t){var e=this.$refs.searchForm.getFormData();Object(f["b"])({id:t.id,timeFrame:e.timeFrame})},handleQuery:function(t){var e=this;return Object(r["a"])(Object(o["a"])().mark((function a(){var n,i,r,p,c;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.sort,i=e.$refs.searchForm.getFormData(),r=e.$refs.pagination.getPaginationData(),p=Object(s["a"])(Object(s["a"])({},i),{},{page:r.page,pageSize:r.pageSize,sort:n}),e.openLoading(),a.next=7,Object(f["k"])(Object(s["a"])({},p));case 7:c=a.sent,e.closeLoading(),e.tableData=c.data||[],e.total=+c.total,e.original_data=c.original_data||[],e.$notify({type:"success",title:"数据已更新"+Object(b["a"])(new Date,"HH: mm: ss"),offset:0});case 13:case"end":return a.stop()}}),a)})))()},handleExport:function(t){Object(f["c"])(Object(s["a"])({},t))},getSummaries:function(t){var e=this,a=t.columns,n=this.original_data,i=n.length,o=[],r={};a.forEach((function(t,e){if(0===e)return o[e]="合计",void(r["合计"]=0);r[t.property]=e;var a=n.map((function(e){return Number(e[t.property])}));a.every((function(t){return isNaN(t)}))?"shop_name"==t.property?o[e]=i+"个":o[e]="/":(o[e]=a.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),t.property.indexOf("_pro")>-1&&"gross_profit"!=t.property?o[e]=0:"shopowner"===t.property?o[e]="/":"shop_people_nums"===t.property?o[e]=Object(p["h"])(o[e])+"人":"finance_maintainer"===t.property?o[e]="/":o[e]=o[e].toFixed(0))}));var s=o[r["sale_amount"]]||0,c=["profit","gross_profit","all_expenses","plat_commissions","plat_marketing_expenses","plat_other_expenses","marketing_expenses","post_expenses","return_expenses","other_expenses","labor_cost_expenses","manage_expenses","interest_expenses"];return c.map((function(t){var a="0.00 %";0!=s&&(a=e.processNum(o[r[t]]/s*100)),o[r[t]]+=" | "+a+"%"})),o}}},P=N,L=(a("75eb"),Object(x["a"])(P,n,i,!1,null,"4714be42",null));e["default"]=L.exports},"38f5":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"self-pagination"},[e("el-pagination",{attrs:{background:"","current-page":t.page,"page-size":t.pageSize,"page-sizes":t.pageSizes,total:t.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":t.handlePageChange,"size-change":t.handleSizeChange}})],1)},i=[],o=(a("a9e3"),a("5627")),r={name:"Pagination",mixins:[o["a"]],props:{total:Number},data:function(){return{pageSizes:[10,20,50,100,300],pageSize:20,page:1}},methods:{handleSizeChange:function(t){this.pageSize=t,this.$emit("on-page-change",{page:this.page,pageSize:this.pageSize})},handlePageChange:function(t){this.page=t,this.$emit("on-page-change",{page:t,pageSize:this.pageSize})},getPaginationData:function(){return{page:this.page,pageSize:this.pageSize}}}},s=r,p=(a("6658"),a("2877")),c=Object(p["a"])(s,n,i,!1,null,"7d1a7f65",null);e["a"]=c.exports},"458e":function(t,e,a){},"47f1":function(t,e,a){},5627:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={data:function(){return{tableLoading:!1,dataTotal:0,pageSize:50,currentPage:1,pageSizes:[20,50,100,200,400]}}}},"60ea":function(t,e,a){"use strict";a("dea8")},6658:function(t,e,a){"use strict";a("ff04")},"75eb":function(t,e,a){"use strict";a("7cab")},"7cab":function(t,e,a){},"8d07":function(t,e,a){"use strict";a("458e")},a535:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return t.reRender?e("div",{staticClass:"swiper-container"},[e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptions}},t._l(t.noticeList,(function(a){return e("swiper-slide",{key:a},[e("div",{staticClass:"slide-text"},[t._v(t._s(a))])])})),1)],1):t._e()},i=[],o=a("5530"),r=a("2f62"),s=a("7212"),p=(a("a7a3"),{name:"Banner",activated:function(){this.activateBanner()},computed:Object(o["a"])(Object(o["a"])({},Object(r["c"])({noticeList:"finance/noticeList"})),{},{swiperOptions:function(){return{speed:9e4,autoplay:this.noticeList.length>1&&{delay:0,stopOnLastSlide:!1,disableOnInteraction:!0},loop:!0}}}),data:function(){return{reRender:!0}},methods:{activateBanner:function(){var t=this;this.reRender=!1,setTimeout((function(){t.reRender=!0}),200)}},components:{Swiper:s["Swiper"],SwiperSlide:s["SwiperSlide"]}}),c=p,l=(a("e476"),a("2877")),m=Object(l["a"])(c,n,i,!1,null,"40036286",null);e["a"]=m.exports},a7a3:function(t,e,a){},cd05:function(t,e,a){"use strict";a.d(e,"l",(function(){return o})),a.d(e,"f",(function(){return r})),a.d(e,"i",(function(){return s})),a.d(e,"g",(function(){return p})),a.d(e,"m",(function(){return c})),a.d(e,"k",(function(){return l})),a.d(e,"j",(function(){return m})),a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return h})),a.d(e,"d",(function(){return d})),a.d(e,"a",(function(){return f})),a.d(e,"h",(function(){return b})),a.d(e,"e",(function(){return g}));a("4e82"),a("99af");var n=a("c1fb"),i=a("da71"),o=function(){return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopOptions"),{})},r=function(){return n["a"].get(i["a"].api("Dashboard/ShopFinance/getMaintainerOptions"),{})},s=function(t){var e=t.shopId,a=t.timeFrame,o=t.dateTime,r={shopId:e,timeFrame:a,dateTime:o};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopFinanceDetail"),{params:r})},p=function(){return n["a"].get(i["a"].api("Dashboard/ShopFinance/getPaperWorkList"))},c=function(t){var e=t.shopId,a=t.limit,o=t.timeFrame,r={shopId:e,limit:a,timeFrame:o};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopProfitList"),{params:r})},l=function(t){var e=t.shopId,a=t.timeFrame,o=t.sort,r=t.startDate,s=t.endDate,p=t.isSplit,c=t.maintainers,l=t.page,m=t.pageSize,u={shopId:e,timeFrame:a,sort:o,startDate:r,endDate:s,isSplit:p,maintainers:c,page:l,pageSize:m};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopFinanceReportList"),{params:u})},m=function(t){var e=t.id,a=t.timeFrame,o={id:e,timeFrame:a};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopFinanceDetailByid"),{params:o})},u=function(t){var e=i["a"].api("Dashboard/ShopFinance/exportShopFinance")+"?";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");window.open(e)},h=function(t){var e=i["a"].api("Dashboard/ShopFinance/exportShopFinanceDetail")+"?";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");window.open(e)},d=function(t){var e=t.type,a=t.id,o=t.timeFrame,r=t.startDate,s=t.endDate,p=t.sort,c={type:e,id:a,timeFrame:o,startDate:r,endDate:s,sort:p};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getDivFinanceReportList"),{params:c})},f=function(t){var e=i["a"].api("Dashboard/ShopFinance/exportDivFinance")+"?";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");window.open(e)},b=function(t){var e=t.shopId,a=t.timeFrame,o=t.dateTime,r=t.saleAmount,s=t.postSum,p={shopId:e,timeFrame:a,dateTime:o,saleAmount:r,postSum:s};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getPostFee"),{params:p})},g=function(){var t={};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getDivisionData"),{params:t})}},dea8:function(t,e,a){},e476:function(t,e,a){"use strict";a("47f1")},ff04:function(t,e,a){}}]);