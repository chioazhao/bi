(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86bf6f44"],{"2e23":function(t,e,a){"use strict";a.r(e);var n,o,i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"shop-sale-report"},[e("div",{staticClass:"search-container"},[e("SearchForm",{ref:"searchForm",on:{"on-search":t.handleSearch,"on-export":t.handleExport,"on-single-shop-search":t.handleSearchSingleShop}})],1),e("div",{staticClass:"table-container"},[e("Table",{attrs:{loading:t.loading,columns:t.listCols,data:t.tableData,setColumn:!0,option:t.tableOption},on:{"row-dblclick":t.handleRowDblclickCheckFinanceDetail,"sort-change":t.onSortChange}})],1),e("SaleDetailWin",{ref:"saleDetailWin"})],1)},r=[],s=a("3835"),c=a("5530"),l=(a("d81d"),a("4de4"),a("d3b7"),a("a15b"),a("4e82"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-form"},[e("el-form",{ref:"form",attrs:{model:t.form,size:"small",inline:""}},[e("el-form-item",{attrs:{label:"店铺："}},[e("el-select",{staticStyle:{width:"230px"},attrs:{clearable:"",multiple:"",filterable:"","collapse-tags":"",placeholder:"请选择店铺，可搜索，可多选"},model:{value:t.form.shopIdArr,callback:function(e){t.$set(t.form,"shopIdArr",e)},expression:"form.shopIdArr"}},t._l(t.shopOptions,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(a.label))]),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e("el-tag",{attrs:{effect:"plain",type:1==a.type?"primary":"success"}},[t._v(t._s(1==a.type?"店铺":"事业群"))])],1)])})),1),e("el-button-group",[e("el-button",{attrs:{type:"warning"},on:{click:t.onClearShopSelect}},[t._v("清空")]),e("el-button",{attrs:{type:"primary"},on:{click:t.onSelectAllShop}},[t._v("全选")])],1)],1),e("el-form-item",{attrs:{label:"时间："}},[e("el-radio-group",{model:{value:t.form.timeFrame,callback:function(e){t.$set(t.form,"timeFrame",e)},expression:"form.timeFrame"}},[e("el-radio-button",{attrs:{label:"day"}},[t._v("日")]),e("el-radio-button",{attrs:{label:"month"}},[t._v("月")])],1),e("span",{directives:[{name:"show",rawName:"v-show",value:"month"===t.form.timeFrame,expression:"form.timeFrame === 'month'"}],staticClass:"monthSelect"},[e("el-date-picker",{staticStyle:{width:"230px"},attrs:{type:"monthrange","range-separator":"~","value-format":"yyyy-MM-dd",format:"yyyy年MM月","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),e("span",{directives:[{name:"show",rawName:"v-show",value:"day"===t.form.timeFrame,expression:"form.timeFrame === 'day'"}],staticClass:"daySelect"},[e("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"~","value-format":"yyyy-MM-dd",format:"yyyy年MM月dd日","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),e("el-button",{attrs:{type:"warning"},on:{click:t.onClearDateSelect}},[t._v("清空")])],1),e("el-form-item",[e("el-checkbox",{model:{value:t.form.isSyq,callback:function(e){t.$set(t.form,"isSyq",e)},expression:"form.isSyq"}},[t._v("事业群维度")])],1),e("el-form-item",[e("el-button-group",[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onSearch}},[t._v("查询")]),e("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.onExport}},[t._v("导出")])],1)],1),e("el-form-item",{attrs:{label:"快捷操作："}},[e("el-button-group",{directives:[{name:"show",rawName:"v-show",value:"month"===t.form.timeFrame,expression:"form.timeFrame === 'month'"}]},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onSearchThisMonth}},[t._v("查询当月")]),e("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.onExportThisMonth}},[t._v("导出当月")])],1),e("el-button-group",{directives:[{name:"show",rawName:"v-show",value:"day"===t.form.timeFrame,expression:"form.timeFrame === 'day'"}]},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onSearchToday}},[t._v("查询当日")]),e("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.onExportToday}},[t._v("导出当日")])],1)],1)],1)],1)}),p=[],h=(a("fb6a"),a("b0c0"),a("2f62")),m=a("cd05"),d=a("fa7d"),u=a("ed08"),f=[{text:"当日",onClick:function(t){var e=new Date,a=new Date;t.$emit("pick",[a,e])}},{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}],b={name:"SearchForm",mounted:function(){this.init()},data:function(){return{form:{shopIdArr:[],timeFrame:"day",date:[],isSplit:!0,isSyq:!1},pickerOptions:{shortcuts:f}}},computed:Object(c["a"])({},Object(h["c"])({shopOptions:"finance/shopOptions",noticeList:"finance/noticeList"})),methods:Object(c["a"])(Object(c["a"])({},Object(h["b"])({setShopOptions:"finance/setShopOptions",setNoticeList:"finance/setNoticeList"})),{},{init:function(){Object(d["e"])(this.shopOptions)?this.getShopOptions():1==this.shopOptions.length&&"day"===this.form.timeFrame?this.searchSingleShopFinance(this.shopOptions[0]):this.shopOptions.length>1&&"day"===this.form.timeFrame&&this.onSearchToday(),Object(d["e"])(this.noticeList)&&this.getNoticeList()},getFormData:function(){return Object(c["a"])({},this._getFormData())},onSelectAllShop:function(){var t=this.shopOptions.map((function(t){return t.value}));this.form.shopIdArr=t},onClearShopSelect:function(){this.form.shopIdArr=[]},onClearDateSelect:function(){this.form.date=[]},onSearch:function(){this.$emit("on-search",this._getFormData())},onSearchToday:function(){this.form.timeFrame="day";var t=Object(u["a"])(new Date,"yyyy-MM-dd");this.form.date=[t,t],this.onSearch()},onSearchThisMonth:function(){this.form.timeFrame="month";var t=Object(u["a"])(new Date,"yyyy-MM-dd");this.form.date=[t,t],this.onSearch()},onExport:function(){this.$emit("on-export",this._getFormData())},onExportToday:function(){var t=Object(u["a"])(new Date,"yyyy-MM-dd");this.$emit("on-export",{shopIdArr:this.form.shopIdArr,timeFrame:"day",date:[t,t],isSyq:this.form.isSyq})},onExportThisMonth:function(){var t=Object(u["a"])(new Date,"yyyy-MM");this.$emit("on-export",{shopIdArr:this.form.shopIdArr,timeFrame:"month",date:[t,t],isSyq:this.form.isSyq})},_getFormData:function(){var t=Object.assign({},Object(c["a"])({},this.form));return t["date"]=t["date"].slice(0),"month"===t.timeFrame&&t.date.length>0&&(t.date[0]=t.date[0].slice(0,7),t.date[1]=t.date[1].slice(0,7)),t},getShopOptions:function(){var t=this;Object(m["l"])().then((function(e){if(200===e.code){var a=e.data.map((function(t){return{value:t.id,label:t.name,type:t.type}}));t.setShopOptions(a),1===a.length&&"day"===t.timeFrame?t.searchSingleShopFinance(a[0]):t.shopOptions.length>1&&"day"===t.form.timeFrame&&t.onSearchToday()}else t.$message.error(e.msg||"初始化店铺信息失败，请重试刷新页面")}))},getNoticeList:function(){var t=this;Object(m["g"])().then((function(e){200==e.code&&(Object(d["e"])(e.data)||t.setNoticeList(e.data))}))},searchSingleShopFinance:function(t){var e=Object(u["a"])(new Date,"yyyy-MM-dd");this.$emit("on-single-shop-search",{shopIdArr:[t.value],timeFrame:"day",date:[e,e],isSyq:t.isSyq})}})},y=b,g=(a("8189"),a("2877")),S=Object(g["a"])(y,l,p,!1,null,"91fad576",null),v=S.exports,D=(a("b680"),a("a9e3"),function(){var t=this,e=t._self._c;return e("Win",{ref:"win",attrs:{title:t.title,top:"25vh"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"table-container"},[e("el-table",{staticStyle:{width:"500px"},attrs:{data:t.tableData,border:"",size:"small","row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},t._l(t.days,(function(a,n){return e("el-table-column",{key:n,attrs:{label:"00-00"==a?t.shopName:a,align:"center","min-width":0==n?"150px":"100px"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("span",n>0?[o.row["00-00"].indexOf("同比")>-1?e("span",[t.isNegative(o.row[a])?e("span",{staticClass:"red"},[o.row[a]<0?e("span",[t._v(" ↓ "+t._s(o.row[a])+"% ")]):e("span",[t._v(" "+t._s(o.row[a])+"% ")])]):e("span",{staticClass:"green"},[t._v(" ↑ "+t._s(o.row[a])+"% ")])]):e("span",[t._v(" "+t._s(Number(o.row[a]).toFixed(0))+" ")])]:[t._v(" "+t._s(o.row[a])+" ")])]}}],null,!0)})})),1)],1)])])}),F=[],_=(a("14d9"),a("f2bc")),O=(a("99af"),a("c1fb")),w=a("da71"),j=function(t){var e=t.shopId,a=t.timeFrame,n=t.startDate,o=t.endDate,i=t.sort,r=t.isSyq,s={shopId:e,timeFrame:a,startDate:n,endDate:o,sort:i,isSyq:r};return O["a"].post(w["a"].api("Dashboard/ShopFinanceTest/getSaleReportList"),s)},x=function(t,e){var a={shop_id:t,month:e};return O["a"].post(w["a"].api("Dashboard/ShopFinance/getDateDetailsByMonth"),a)},C=function(t){var e=w["a"].api("Dashboard/ShopFinance/exportShopSaleReport")+"?";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");window.open(e)},k=a("398e"),I={name:"ShopFinanceDetailWin",components:{Win:_["a"]},data:function(){return{title:"",showTableField:[],tableData:[],financeFieldTitle:k["a"],shopName:"",shopId:0,month:"",days:[],isSyq:!1}},computed:{isNegative:function(){return function(t){return!(parseInt(t)>0)}},transToValue:function(t,e){return t[e]}},methods:{open:function(){return this.clear(),this.$refs.win.open(),this},close:function(){this.$refs.win.close()},clear:function(){return this.tableData=[],this},init:function(t,e,a){var n=this;this.isSyq=a,this.title=e,this.shopId=t.shop_id,this.shopName=t.shop_name,this.month=t.month,x(this.shopId,this.month).then((function(t){n.setData(t.data)})).catch((function(){n.$message.error("获取数据失败!")}))},setData:function(t){this.days=t.days,this.tableData.push(t[this.isSyq?"syq":this.shopId].nowlist),this.tableData.push(t[this.isSyq?"syq":this.shopId].lastlist),this.tableData.push(t[this.isSyq?"syq":this.shopId].amount_compare)}}},q=I,W=(a("86c8"),Object(g["a"])(q,D,F,!1,null,"98ff7b4e",null)),T=W.exports,M=a("dc19"),$=a("ac0d"),L=a("ade3"),A=function(t,e,a){return parseFloat((Number(t)/e).toFixed(a))},N={checked:!0,fixed:!1,sortable:!1,headerAlign:"center",showOverflowTooltip:!0,minWidth:120,align:"right",toString:!1,toolTip:"",subTooltip:"",class:"",subClass:"",subProp:"",cellClass:"",icon:"el-icon-question",process:function(t){return isNaN(t)?t:Object(d["h"])(t)},subProcess:function(t){return t},disabled:!1},R=[{fixed:!0,prop:"syq_title",title:"事业群",align:"left",disabled:!0},{fixed:!0,prop:"shop_type_name",title:"平台",align:"left",disabled:!0},{fixed:!0,prop:"shop_name",title:"店铺",align:"left",minWidth:160,disabled:!0},{prop:"month",title:"月份",align:"center",minWidth:100},{prop:"month_targets",title:"月销售任务/万",align:"right",minWidth:130,cellClass:"bg-lime",process:function(t){return Object(d["h"])(+t/1e4)}},{prop:"month_sale_amount",title:"月销售/万",minWidth:120,tooltip:"当月，截至到昨日销售",cellClass:"bg-lime",process:function(t){return Object(d["h"])(+t/1e4)},sortable:!0},{prop:"month_pro",title:"完成率",tooltip:"月销售 / 月销售任务",minWidth:80,cellClass:"bg-lime",process:function(t){return Object(d["h"])(t)+"%"}},{prop:"month_sale_amount_compare",title:"各店销售占比",minWidth:120,tooltip:"月销售占合计销售比",cellClass:"bg-lime",process:function(t){return Object(d["h"])(t)+"%"}},(n={prop:"last_month_amount",title:"同期月销售/万",minWidth:150,tooltip:"去年当月、截至到昨日销售",cellClass:"bg-lime",process:function(t){return A(t,1e4,1)}},Object(L["a"])(n,"process",(function(t){return Object(d["h"])(+t/1e4)})),Object(L["a"])(n,"sortable",!0),n),{prop:"month_compare",title:"月销售同比",minWidth:100,cellClass:"bg-lime",icon:"",process:function(t){return Object(d["h"])(t)+"%"}},{prop:"month_profit",title:"月利润/万",cellClass:"bg-lime",process:function(t){return Object(d["h"])(+t/1e4)},sortable:!0},{prop:"day_target",title:"日销售任务/元",minWidth:120,icon:"",cellClass:"bg-cyan"},{prop:"day_sale_amount",title:"日销售/元",minWidth:110,icon:"",cellClass:"bg-cyan",sortable:!0},{prop:"day_completion_rate",title:"完成率",icon:"",minWidth:80,cellClass:"bg-cyan",process:function(t){return Object(d["h"])(100*+t)+"%"}},{prop:"day_sale_amount_compare",title:"各店销售占比",minWidth:120,tooltip:"日销售占合计销售比",cellClass:"bg-cyan",process:function(t){return Object(d["h"])(t)+"%"}},{prop:"last_day_amount",title:"同期日销售/元",tooltip:"去年筛选时间内的销售",minWidth:150,sortable:!0,cellClass:"bg-cyan"},{prop:"day_compare",title:"日销售同比",icon:"",cellClass:"bg-cyan",process:function(t){return Object(d["h"])(100*+t)+"%"},minWidth:100},{prop:"day_profit",title:"日利润/元",minWidth:110,icon:"",cellClass:"bg-cyan",sortable:!0},{prop:"year_targets",title:"年销售任务/万",minWidth:120,icon:"",cellClass:"bg-orange",process:function(t){return Object(d["h"])(t/1e4)}},(o={prop:"year_sale_amount",title:"年销售/万",minWidth:110,icon:"",cellClass:"bg-orange",process:function(t){return A(t,1e4,1)}},Object(L["a"])(o,"process",(function(t){return Object(d["h"])(t/1e4)})),Object(L["a"])(o,"sortable",!0),o),{prop:"year_pro",title:"完成率",cellClass:"bg-orange",icon:"",minWidth:80,process:function(t){return Object(d["h"])(t)+"%"}},{prop:"year_sale_amount_compare",title:"各店销售占比",minWidth:120,tooltip:"年销售占合计销售比",cellClass:"bg-orange",process:function(t){return Object(d["h"])(t)+"%"}},{prop:"last_year_amount",title:"同期年销售/万",minWidth:160,tooltip:"去年截至到筛选日期结束日期当天",process:function(t){return Object(d["h"])(t/1e4)},cellClass:"bg-orange",sortable:!0},{prop:"year_compare",title:"年销售同比",minWidth:100,icon:"",cellClass:"bg-orange",process:function(t){return Object(d["h"])(t)+"%"}},{prop:"year_profit",title:"年利润/万",minWidth:120,icon:"",cellClass:"bg-orange",process:function(t){return Object(d["h"])(t/1e4)},sortable:!0}],E={name:"ShopSaleReport",mixins:[$["d"],$["c"]],components:{SearchForm:v,SaleDetailWin:T,Table:M["a"]},created:function(){this.baseCol=N,this.listCols=R.map((function(t){return Object(c["a"])(Object(c["a"])({},N),t)}))},mounted:function(){},watch:{timeFrame:function(t){-1===t.indexOf("day")?this.listCols=R.filter((function(t){return-1===t.prop.indexOf("day")})).map((function(t){return Object(c["a"])(Object(c["a"])({},N),t)})):this.listCols=R.map((function(t){return Object(c["a"])(Object(c["a"])({},N),t)}))},tableData:function(){var t=this;this.timeFrame.indexOf("day")>-1&&(this.listCols=R.map((function(e){return e.prop.indexOf("day")>-1&&("last_day_amount"==e.prop?e.tooltip="去年筛选时间内的销售":e.tooltip=t.days+"天数据"),Object(c["a"])(Object(c["a"])({},N),e)})))}},data:function(){return{days:1,isSyq:!1,visible:!1,loading:!1,tableData:[],timeFrame:"today",tableOption:{ref:"shopSaleList",key:"shopSaleList",notAllowDrop:!0,backendSummary:!0,tips:"双击行展开详情"}}},methods:{onSortChange:function(t){var e=t.column,a=t.prop,n=t.order;Object(d["i"])({column:e,prop:a,order:n},this.tableData)},handleSearch:function(t){var e=t.shopIdArr,a=t.timeFrame,n=(t.date,t.isSyq),o=this.$refs.searchForm.getFormData(),i=Object(s["a"])(o.date,2),r=i[0],c=i[1];this.isSyq=n,this.timeFrame=a,this.getSaleReportList({shopId:e.join(","),timeFrame:a,sort:"",startDate:r,endDate:c,isSyq:n})},handleSearchSingleShop:function(t){var e=t.shopIdArr,a=t.timeFrame,n=t.date,o=t.isSyq;this.isSyq=o,this.timeFrame=a,this.getShopFinanceReportList({shopId:e.join(","),timeFrame:a,sort:"",startDate:n[0]||"",endDate:n[1]||"",isSyq:o},!0)},handleRowDblclickCheckFinanceDetail:function(t,e,a){var n=this;this.$nextTick((function(){var e=n.isSyq?"「 "+t.syq_title+" "+t.month+" 」销售详情":"「 "+t.shop_name+" "+t.month+" 」销售详情";n.$refs.saleDetailWin.open().init(t,e,n.isSyq)}))},getSaleReportList:function(t){var e=this,a=t.shopId,n=t.timeFrame,o=t.sort,i=t.startDate,r=t.endDate,s=t.isSyq;if(n.indexOf("day")>-1){var c=Date.parse(new Date(i)),l=Date.parse(new Date(r)),p=parseInt((l-c)/864e5);this.days=p+1}this.openLoading();var h=n.indexOf("day")>-1?"day":"month";j({shopId:a,timeFrame:h,startDate:i,endDate:r,sort:o,isSyq:s}).then((function(t){e.closeLoading(),e.tableData=t.data||[],e.$notify({type:"success",title:"数据已更新"+Object(u["a"])(new Date,"HH: mm: ss"),offset:0})})).catch((function(){e.$message.error("获取数据失败!"),e.closeLoading()}))},handleExport:function(t){C({shopId:t.shopIdArr.join(","),timeFrame:t.timeFrame,sort:"",startDate:t.date[0]||"",endDate:t.date[1]||"",isSyq:t.isSyq})}}},z=E,P=(a("b4f5"),Object(g["a"])(z,i,r,!1,null,"1725757c",null));e["default"]=P.exports},"4faf":function(t,e,a){},"581b":function(t,e,a){},8189:function(t,e,a){"use strict";a("99e2")},"86c8":function(t,e,a){"use strict";a("4faf")},"99e2":function(t,e,a){},b4f5:function(t,e,a){"use strict";a("581b")},cd05:function(t,e,a){"use strict";a.d(e,"l",(function(){return i})),a.d(e,"f",(function(){return r})),a.d(e,"i",(function(){return s})),a.d(e,"g",(function(){return c})),a.d(e,"m",(function(){return l})),a.d(e,"k",(function(){return p})),a.d(e,"j",(function(){return h})),a.d(e,"c",(function(){return m})),a.d(e,"b",(function(){return d})),a.d(e,"d",(function(){return u})),a.d(e,"a",(function(){return f})),a.d(e,"h",(function(){return b})),a.d(e,"e",(function(){return y}));a("4e82"),a("99af");var n=a("c1fb"),o=a("da71"),i=function(){return n["a"].get(o["a"].api("Dashboard/ShopFinance/getShopOptions"),{})},r=function(){return n["a"].get(o["a"].api("Dashboard/ShopFinance/getMaintainerOptions"),{})},s=function(t){var e=t.shopId,a=t.timeFrame,i=t.dateTime,r={shopId:e,timeFrame:a,dateTime:i};return n["a"].get(o["a"].api("Dashboard/ShopFinance/getShopFinanceDetail"),{params:r})},c=function(){return n["a"].get(o["a"].api("Dashboard/ShopFinance/getPaperWorkList"))},l=function(t){var e=t.shopId,a=t.limit,i=t.timeFrame,r={shopId:e,limit:a,timeFrame:i};return n["a"].get(o["a"].api("Dashboard/ShopFinance/getShopProfitList"),{params:r})},p=function(t){var e=t.shopId,a=t.timeFrame,i=t.sort,r=t.startDate,s=t.endDate,c=t.isSplit,l=t.maintainers,p=t.page,h=t.pageSize,m={shopId:e,timeFrame:a,sort:i,startDate:r,endDate:s,isSplit:c,maintainers:l,page:p,pageSize:h};return n["a"].get(o["a"].api("Dashboard/ShopFinance/getShopFinanceReportList"),{params:m})},h=function(t){var e=t.id,a=t.timeFrame,i={id:e,timeFrame:a};return n["a"].get(o["a"].api("Dashboard/ShopFinance/getShopFinanceDetailByid"),{params:i})},m=function(t){var e=o["a"].api("Dashboard/ShopFinance/exportShopFinance")+"?";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");window.open(e)},d=function(t){var e=o["a"].api("Dashboard/ShopFinance/exportShopFinanceDetail")+"?";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");window.open(e)},u=function(t){var e=t.type,a=t.id,i=t.timeFrame,r=t.startDate,s=t.endDate,c=t.sort,l={type:e,id:a,timeFrame:i,startDate:r,endDate:s,sort:c};return n["a"].get(o["a"].api("Dashboard/ShopFinance/getDivFinanceReportList"),{params:l})},f=function(t){var e=o["a"].api("Dashboard/ShopFinance/exportDivFinance")+"?";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");window.open(e)},b=function(t){var e=t.shopId,a=t.timeFrame,i=t.dateTime,r=t.saleAmount,s=t.postSum,c={shopId:e,timeFrame:a,dateTime:i,saleAmount:r,postSum:s};return n["a"].get(o["a"].api("Dashboard/ShopFinance/getPostFee"),{params:c})},y=function(){var t={};return n["a"].get(o["a"].api("Dashboard/ShopFinance/getDivisionData"),{params:t})}}}]);