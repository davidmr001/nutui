/*! NutUI v1.2.1 Fri May 11 2018 18:28:18 GMT+0800 (中国标准时间) */
webpackJsonpnutui([27],{1073:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"商品价格组件，支持小数点前后应用不同样式、千位分隔、人民币符号等功能。",showQrCode:!0}}),t._v(" "),v("h5",[t._v("示例")]),t._v(" "),v("h6",[t._v("带人民币符号，且千位分隔")]),t._v(" "),v("nut-price",{attrs:{price:1010,needSymbol:!0,thousands:!0}}),v("br"),v("br"),t._v(" "),v("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),v("h6",[t._v("不带人民币符号，关闭千位分隔，小数点后显示一位")]),t._v(" "),v("nut-price",{attrs:{price:1010,needSymbol:!1,thousands:!1,decimalDigits:1}}),t._v(" "),v("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),v("br"),v("br"),t._v(" "),v("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"tbl-wrapper"},[v("table",{staticClass:"u-full-width"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("price")]),t._v(" "),v("td",[t._v("价格数量")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("needSymbol")]),t._v(" "),v("td",[t._v("是否需要加上人民币符号")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("decimalDigits")]),t._v(" "),v("td",[t._v("小数位位数")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("thousands")]),t._v(" "),v("td",[t._v("是否按照千分号形式显示")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("--")])])])])])}]}},1167:function(t,e,v){var _=v(975);"string"==typeof _&&(_=[[t.i,_,""]]),_.locals&&(t.exports=_.locals);v(3)("aa7d3a22",_,!0,{})},853:function(t,e,v){function _(t){v(1167)}var n=v(1)(v(947),v(1073),_,null,null);t.exports=n.exports},947:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-price  \n:price="1010" \n:needSymbol="true" \n:thousands="true"\n></nut-price>',demo2:'<nut-price  \n:price="1010" \n:needSymbol="false" \n:thousands="false" \n:decimalDigits="1"\n></nut-price>'}},methods:{}}},975:function(t,e,v){e=t.exports=v(2)(),e.push([t.i,"",""])}});