(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdcbf248"],{1678:function(e,t,a){},"47f1":function(e,t,a){},"84d2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"store-export"},[t("div",{staticClass:"banner-container"},[t("Banner")],1),t("div",{staticClass:"search-container"},[t("SearchForm",{ref:"searchForm",on:{"on-search":e.handleSearch,"on-export":e.handleExport}})],1),t("div",{staticClass:"table-container"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dataTable",staticStyle:{width:"99%"},attrs:{"element-loading-text":"数据加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",data:e.tableData,border:"",stripe:"",size:"mini",height:e.tableHeight,"cell-style":e.getColumnCellStyle2,"header-cell-style":e.getHeaderCellStyle2},on:{"sort-change":e.handleSortChange}},[t("el-table-column",{attrs:{prop:"name",width:"180px","header-align":"center",label:"名称"}}),t("el-table-column",{attrs:{prop:"leader",width:"100px","header-align":"center",label:"负责人"}}),t("el-table-column",{attrs:{prop:"date",width:"120px","header-align":"center",align:"right",label:"合计时间"}}),t("el-table-column",{attrs:{sortable:"custom",align:"right",prop:"sale_amount",width:"150px","header-align":"center",label:"销售额"}}),t("el-table-column",{attrs:{sortable:"custom",align:"right",prop:"profit",width:"200px","header-align":"center",label:"利润（利润率）"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.isNegative(a.row.profit)?t("span",{staticClass:"red"},[e._v(" "+e._s(a.row.profit||0)+" ")]):t("span",{staticClass:"green"},[e._v(" "+e._s(a.row.profit)+" ")]),t("span",{staticClass:"orange pro"},[e._v(" "+e._s(a.row.profit_pro||0)+"% ")])]}}])}),t("el-table-column",{attrs:{align:"right",prop:"gross_profit",width:"200px","header-align":"center",label:"毛利额（毛利率）"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.isNegative(a.row.gross_profit)?t("span",{staticClass:"red"},[e._v(" "+e._s(a.row.gross_profit||0)+" ")]):t("span",{staticClass:"green"},[e._v(" "+e._s(a.row.gross_profit)+" ")]),t("span",{staticClass:"orange pro"},[e._v(" "+e._s(a.row.gross_profit_pro||0)+"% ")])]}}])}),t("el-table-column",{attrs:{align:"right",prop:"all_expenses",width:"200px","header-align":"center",label:"费用合计（占比）"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.isNegative(a.row.all_expenses)?t("span",{staticClass:"red"},[e._v(" "+e._s(a.row.all_expenses||0)+" ")]):t("span",{staticClass:"green"},[e._v(" "+e._s(a.row.all_expenses)+" ")]),t("span",{staticClass:"orange pro"},[e._v(" "+e._s(a.row.all_expenses_pro||0)+"% ")])]}}])}),t("el-table-column",{attrs:{align:"right",prop:"sales_task",width:"200px","header-align":"center",label:"任务（完成率）"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(" "+e._s(a.row.sales_task)+" ")]),t("span",{staticClass:"orange pro"},[e._v(" "+e._s(a.row.sales_complete_rate||0)+"% ")])]}}])})],1)],1)])},i=[],r=a("5530"),o=(a("4e82"),a("a535")),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-form"},[t("el-form",{ref:"form",attrs:{model:e.form,size:"small",inline:""}},[t("el-form-item",{attrs:{label:"线上事业群："}},[t("el-select",{staticStyle:{width:"250px"},attrs:{clearable:"",multiple:"",filterable:"","collapse-tags":"",placeholder:"请选择店铺，可搜索，可多选"},model:{value:e.form.divisionValue,callback:function(t){e.$set(e.form,"divisionValue",t)},expression:"form.divisionValue"}},e._l(e.divisionOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-button-group",[t("el-button",{attrs:{type:"warning"},on:{click:e.onClearDivisionSelect}},[e._v("清空")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onSelectAllDivision}},[e._v("全选")])],1)],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"平台事业群："}},[t("el-select",{staticStyle:{width:"250px"},attrs:{clearable:"",multiple:"",filterable:"","collapse-tags":"",placeholder:"请选择店铺，可搜索，可多选"},model:{value:e.form.groupValue,callback:function(t){e.$set(e.form,"groupValue",t)},expression:"form.groupValue"}},e._l(e.groupOptions,(function(a){return t("el-option-group",{key:a.label,attrs:{label:a.label}},e._l(a.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1),t("el-button-group",[t("el-button",{attrs:{type:"warning"},on:{click:e.onClearGroupSelect}},[e._v("清空")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onSelectAllGroup}},[e._v("全选")])],1)],1),t("el-form-item",{attrs:{label:"时间："}},[t("el-radio-group",{model:{value:e.form.timeFrame,callback:function(t){e.$set(e.form,"timeFrame",t)},expression:"form.timeFrame"}},[t("el-radio-button",{attrs:{label:"day"}},[e._v("日")]),t("el-radio-button",{attrs:{label:"month"}},[e._v("月")])],1),t("span",{directives:[{name:"show",rawName:"v-show",value:"month"===e.form.timeFrame,expression:"form.timeFrame === 'month'"}],staticClass:"monthSelect"},[t("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"monthrange","range-separator":"~","value-format":"yyyy-MM-dd",format:"yyyy年MM月","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),t("span",{directives:[{name:"show",rawName:"v-show",value:"day"===e.form.timeFrame,expression:"form.timeFrame === 'day'"}],staticClass:"daySelect"},[t("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"~","value-format":"yyyy-MM-dd",format:"yyyy年MM月dd日","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1),t("el-form-item",[t("el-button-group",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onSearch}},[e._v("查询")]),t("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.onExport}},[e._v("导出")])],1)],1)],1)],1)},l=[],c=(a("d3b7"),a("159b"),a("14d9"),a("b0c0"),a("fb6a"),a("a15b"),a("d81d"),a("cd05")),u=a("fa7d"),p=a("ed08"),d=[{text:"当日",onClick:function(e){var t=new Date,a=new Date;e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}],m={name:"SearchForm",mounted:function(){this.initOptions(),this.setDefaultDate(),this.onSearch()},data:function(){return{form:{timeFrame:"day",date:[],divisionValue:[],groupValue:[]},pickerOptions:{shortcuts:d},mainOptions:[]}},computed:{divisionOptions:function(){if(Object(u["e"])(this.mainOptions))return[];var e=[];return this.mainOptions.forEach((function(t){e.push({label:t.name,value:t.id,child:t.child})})),e},groupOptions:function(){for(var e=this,t=[],a=0,n=this.mainOptions.length;a<n;a++){var i=this.mainOptions[a],r={label:i.name};!0===i.hasOwnProperty("child")&&function(){var t=[];e.mainOptions[a].child.forEach((function(e){t.push({label:e.name,value:e.id})})),r["options"]=t}(),t.push(r)}return t}},methods:{initOptions:function(){this.getBusGroupOptions()},getBusGroupOptions:function(){var e=this;Object(c["e"])().then((function(t){200===t.code&&(Object(u["e"])(t.data)||(e.mainOptions=t.data))}))},onSearch:function(){this.$emit("on-search",this._getFormData())},onExport:function(){this.$emit("on-export",this._getFormData())},setDefaultDate:function(){this.form.timeFrame="day";var e=Object(p["a"])(new Date,"yyyy-MM-dd");this.form.date=[e,e]},_getFormData:function(){var e={timeFrame:this.form.timeFrame,date:this.form.date.slice(0)};return"month"===e.timeFrame&&e.date.length>0&&(e.date[0]=e.date[0].slice(0,7),e.date[1]=e.date[1].slice(0,7)),this.form.groupValue.length>0?(e["type"]=2,e["id"]=this.form.groupValue.join(",")):this.form.divisionValue.length>0?(e["type"]=1,e["id"]=this.form.divisionValue.join(",")):(e["type"]=0,e["id"]=0),e},onSelectAllDivision:function(){this.form.divisionValue=this.divisionOptions.map((function(e){return e.value}))},onSelectAllGroup:function(){var e=[];this.groupOptions.forEach((function(t){t.options.forEach((function(t){e.push(t.value)}))})),this.form.groupValue=e},onClearDivisionSelect:function(){this.form.divisionValue=[]},onClearGroupSelect:function(){this.form.groupValue=[]}}},f=m,h=(a("f13c"),a("2877")),g=Object(h["a"])(f,s,l,!1,null,"b4cbe9cc",null),b=g.exports,v=a("ac0d"),_={name:"BusinessGroupReport",mixins:[v["d"]],components:{SearchForm:b,Banner:o["a"]},beforeMount:function(){this.tableHeight=.7*window.innerHeight},mounted:function(){},data:function(){return{loading:!1,tableData:[]}},computed:{isNegative:function(){return function(e){return!(parseInt(e)>0)}}},methods:{handleSearch:function(e){var t=e.timeFrame,a=e.date,n=e.type,i=e.id;this.getBusGroupFinanceList({timeFrame:t,date:a,type:n,id:i})},getBusGroupFinanceList:function(e){var t=this,a=e.timeFrame,n=e.date,i=e.type,r=e.id,o=e.sort,s=void 0===o?"":o,l={timeFrame:a,startDate:n[0],endDate:n[1],type:i,id:r,sort:s};this.loading=!0,Object(c["d"])(l).then((function(e){t.loading=!1,200===e.code&&(!0!==Object(u["e"])(e.data)?(t.tableData=e.data,t.$notify({type:"success",title:"数据已更新"+Object(p["a"])(new Date,"HH: mm: ss"),offset:100})):t.tableData=[])}))},handleExport:function(e){var t=e.timeFrame,a=e.date,n=e.type,i=e.id,r={timeFrame:t,startDate:a[0]||"",endDate:a[1]||"",type:n,id:i};Object(c["a"])(r)},handleSortChange:function(e){e.column;var t=e.prop,a=e.order,n=this.$refs.searchForm._getFormData();if(Object(u["e"])(a))n["sort"]="";else{var i="descending"===a?"desc":"asc";n["sort"]=t+"|"+i}this.getBusGroupFinanceList(Object(r["a"])({},n))}}},w=_,y=(a("cf20"),Object(h["a"])(w,n,i,!1,null,"67226891",null));t["default"]=y.exports},a535:function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return e.reRender?t("div",{staticClass:"swiper-container"},[t("swiper",{staticClass:"swiper",attrs:{options:e.swiperOptions}},e._l(e.noticeList,(function(a){return t("swiper-slide",{key:a},[t("div",{staticClass:"slide-text"},[e._v(e._s(a))])])})),1)],1):e._e()},i=[],r=a("5530"),o=a("2f62"),s=a("7212"),l=(a("a7a3"),{name:"Banner",activated:function(){this.activateBanner()},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({noticeList:"finance/noticeList"})),{},{swiperOptions:function(){return{speed:9e4,autoplay:this.noticeList.length>1&&{delay:0,stopOnLastSlide:!1,disableOnInteraction:!0},loop:!0}}}),data:function(){return{reRender:!0}},methods:{activateBanner:function(){var e=this;this.reRender=!1,setTimeout((function(){e.reRender=!0}),200)}},components:{Swiper:s["Swiper"],SwiperSlide:s["SwiperSlide"]}}),c=l,u=(a("e476"),a("2877")),p=Object(u["a"])(c,n,i,!1,null,"40036286",null);t["a"]=p.exports},a7a3:function(e,t,a){},ac0d:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));a("b680"),a("d3b7"),a("25f0"),a("14d9"),a("a15b"),a("a434"),a("ed08"),a("d0f1");var n={computed:{digitalConfig:function(){return function(e){var t=e.number,a=e.toFixed,n=e.textAlign,i=e.fontSize,r=e.isNeedFormat,o=e.isRed,s=t||0;return s>9999&&!0===r&&(s=this.formatter(s)),{number:[s],textAlign:n||"left",content:"{nt}",toFixed:a||0,style:{fontSize:i||20,fill:o?"#ff4d4f":"#3de7c9"}}}},formatter:function(){return function(e){var t=e.toString().split("").reverse(),a=[];while(t.length)a.push(t.splice(0,3).join(""));return a.join(",").split("").reverse().join("")}}}},i={methods:{getColumnCellStyle2:function(e){e.row,e.column,e.rowIndex;var t=e.columnIndex;switch(t){case 0:case 1:return"background-color: rgba(39, 40, 34, 1); color: #ccc; font-size: 14px; border-color: #595959;";default:return"background-color: rgba(39, 40, 34, 1);color: #e6db74; border-color: #595959; font-size: 14px;"}},getHeaderCellStyle2:function(e){e.row,e.column;var t=e.rowIndex;e.columnIndex;if(0===t)return"background-color: rgba(39, 40, 34, 1); font-size: 14px; color: #e1ca72; border-color: #595959;"}}},r={data:function(){return{financialFieldMap:{plat_commissions:"佣金",plat_marketing_expenses:"营销费用",plat_other_expenses:"其他费用",marketing_expenses:"线下打款——营销费用",post_expenses:"配发费",other_expenses:"其他费用",return_expenses:"退货费用",manage_expenses:"管理费用",interest_expenses:"资金成本",labor_cost_expenses:"人员成本"}}}},o={data:function(){return{loading:!1}},methods:{openLoading:function(){this.loading=!0},closeLoading:function(){this.loading=!1}}}},cd05:function(e,t,a){"use strict";a.d(t,"l",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"i",(function(){return s})),a.d(t,"g",(function(){return l})),a.d(t,"m",(function(){return c})),a.d(t,"k",(function(){return u})),a.d(t,"j",(function(){return p})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return f})),a.d(t,"a",(function(){return h})),a.d(t,"h",(function(){return g})),a.d(t,"e",(function(){return b}));a("4e82"),a("99af");var n=a("c1fb"),i=a("da71"),r=function(){return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopOptions"),{})},o=function(){return n["a"].get(i["a"].api("Dashboard/ShopFinance/getMaintainerOptions"),{})},s=function(e){var t=e.shopId,a=e.timeFrame,r=e.dateTime,o={shopId:t,timeFrame:a,dateTime:r};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopFinanceDetail"),{params:o})},l=function(){return n["a"].get(i["a"].api("Dashboard/ShopFinance/getPaperWorkList"))},c=function(e){var t=e.shopId,a=e.limit,r=e.timeFrame,o={shopId:t,limit:a,timeFrame:r};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopProfitList"),{params:o})},u=function(e){var t=e.shopId,a=e.timeFrame,r=e.sort,o=e.startDate,s=e.endDate,l=e.isSplit,c=e.maintainers,u=e.page,p=e.pageSize,d={shopId:t,timeFrame:a,sort:r,startDate:o,endDate:s,isSplit:l,maintainers:c,page:u,pageSize:p};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopFinanceReportList"),{params:d})},p=function(e){var t=e.id,a=e.timeFrame,r={id:t,timeFrame:a};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getShopFinanceDetailByid"),{params:r})},d=function(e){var t=i["a"].api("Dashboard/ShopFinance/exportShopFinance")+"?";for(var a in e)t+="".concat(a,"=").concat(e[a],"&");window.open(t)},m=function(e){var t=i["a"].api("Dashboard/ShopFinance/exportShopFinanceDetail")+"?";for(var a in e)t+="".concat(a,"=").concat(e[a],"&");window.open(t)},f=function(e){var t=e.type,a=e.id,r=e.timeFrame,o=e.startDate,s=e.endDate,l=e.sort,c={type:t,id:a,timeFrame:r,startDate:o,endDate:s,sort:l};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getDivFinanceReportList"),{params:c})},h=function(e){var t=i["a"].api("Dashboard/ShopFinance/exportDivFinance")+"?";for(var a in e)t+="".concat(a,"=").concat(e[a],"&");window.open(t)},g=function(e){var t=e.shopId,a=e.timeFrame,r=e.dateTime,o=e.saleAmount,s=e.postSum,l={shopId:t,timeFrame:a,dateTime:r,saleAmount:o,postSum:s};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getPostFee"),{params:l})},b=function(){var e={};return n["a"].get(i["a"].api("Dashboard/ShopFinance/getDivisionData"),{params:e})}},cf20:function(e,t,a){"use strict";a("e340")},e340:function(e,t,a){},e476:function(e,t,a){"use strict";a("47f1")},f13c:function(e,t,a){"use strict";a("1678")}}]);