(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fa4ca19"],{"0cac":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CRow",[e("CCol",[e("CRow",[e("CHeaderNav",{staticClass:"ml-3 d-md-down-none mr-auto"},[e("CInput",{staticClass:"mt-1",attrs:{placeholder:"Pencarian",size:"sm"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-search"}})]},proxy:!0}]),model:{value:t.table.search,callback:function(a){t.$set(t.table,"search",a)},expression:"table.search"}})],1),e("CHeaderNav",{staticClass:"mr-0"},[e("CHeaderNavItem",{},[e("CButton",{staticClass:"mr-1 text-white",attrs:{color:"info",size:"sm"}},[e("router-link",{staticClass:"text-white",attrs:{to:{path:t.ButtonNew.url}}},[e("CIcon",{staticClass:"mr-1 ",attrs:{name:"cil-note-add"}}),t._v(" "+t._s(t.ButtonNew.name)+" ")],1)],1)],1),e("CHeaderNavItem",{staticClass:" mr-2"},[e("CHeaderNavLink",[t.action.show?e("CButton",{staticClass:"mr-1 text-white",attrs:{color:"light",size:"sm"}},[e("router-link",{attrs:{to:{path:t.ButtonEdit.url+"/"+t.table.data[t.selected][t.ButtonEdit.params]}}},[e("CIcon",{staticClass:"mr-1 ",attrs:{name:"cil-color-border"}}),t._v(" "+t._s(t.ButtonEdit.name)+" ")],1)],1):t._e(),t.action.show?e("CButton",{staticClass:"mr-1 text-danger",attrs:{color:"light",size:"sm"},on:{click:function(a){t.dialogDelete=!0}}},[e("CIcon",{staticClass:"mr-1",attrs:{name:"cil-trash"}}),t._v(" Hapus ")],1):t._e(),e("CDropdown",{attrs:{color:"light",size:"sm"}},[e("template",{slot:"toggler-content"},[e("CIcon",{staticClass:"mr-1",attrs:{name:"cil-list-filter"}}),t._v(" Filter ")],1),e("CDropdownItem",[t._v(" sdsa ")]),e("CDropdownItem",[t._v("Ubah Data")]),e("CDropdownItem",[t._v("Hapus Data")])],2),e("CButton",{attrs:{color:"light",size:"sm"},on:{click:function(a){return t.refreshTable()}}},[e("CIcon",{staticClass:"mr-1",attrs:{name:"cil-reload"}}),t._v(" Muat Ulang ")],1)],1)],1)],1)],1)],1),e("CCol",{attrs:{col:"12"}},[e("div",{staticClass:"border-top"}),e("div",{staticClass:"wrapperHead mt-3"},[e("div",{staticClass:"tableFixHead",style:{height:t.tableRows.length<=10?t.$options.identitas[0].wHeight-165+"px":t.$options.identitas[0].wHeight+"px"}},[e("table",{staticClass:"table table-sm table-hover"},[e("thead",[e("tr",[e("th",{attrs:{width:"20"}}),t._l(t.tableHeaders,(function(a,s){return e("th",{key:s},[t._v(" "+t._s(a.identifier)+" ")])}))],2)]),e("tbody",[t.isLoading?e("tr",[e("td",{staticClass:"pt-5",attrs:{colspan:t.tableHeaders.length+1}},[e("center",[e("CSpinner",{staticClass:"mr-1",attrs:{color:"primary",size:"sm"}}),t._v(" Memuat Data ... ")],1)],1)]):t._e(),t._l(t.tableRows,(function(a,s){return[e("tr",{key:s,class:{"table-success":s===t.selected}},[e("td",{staticClass:"font-weight-bold"},[e("input",{attrs:{type:"checkbox",readonly:""},domProps:{value:s,checked:s===t.selected},on:{click:function(a){return t.ClickTableOn(s)}}})]),t._l(a,(function(a,n){return e("td",{key:n,on:{click:function(a){return t.ClickTableOn(s)}}},[t._v(" "+t._s(a.value)+" ")])}))],2)]}))],2)])]),e("div",{staticClass:"footer border-top"},[e("p",{staticClass:"text-muted mb-0",on:{click:function(a){return t.toasat()}}},[t._v("Total Data : "+t._s(t.tableRows.length))]),t.toasNot?e("CToaster",{attrs:{autohide:3e3}},[e("CToast",{attrs:{show:t.toasNot,header:"Information",position:"static",color:"success"},on:{"update:show":function(a){t.toasNot=a}}},[t._v(" Data Berhasil Di Hapus ")])],1):t._e()],1)])]),e("CModal",{attrs:{title:"Informasi",color:"danger",show:t.dialogDelete,closeOnBackdrop:!1},on:{"update:show":function(a){t.dialogDelete=a}}},[t._v(" Apakah Anda Yakin Menghapus Data : "),t.dialogDelete?e("p",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.table.data[t.selected][t.ButtonDelete.dialog])+" ? ")]):t._e(),e("template",{slot:"footer"},[e("CButton",{attrs:{color:"danger"},on:{click:function(a){return t.hapusdata()}}},[t._v("Hapus")])],1)],2)],1)},n=[],o=e("a832"),i=e("bc3a"),l={identitas:o["a"],data:function(){return{action:{show:!1},selected:null,activeItem:null,dialogDelete:!1,toasNot:!1}},mounted:function(){},computed:{tableHeaders:function(){return this.header.map((function(t,a){return{index:a,identifier:t}}))},tableRows:function(){var t=this,a=this.data.map((function(a,e){return t.rows.map((function(t,e){var s=t.split("."),n={key:t,value:a[s[0]][s[1]]},o={key:t,value:a[s]};return s.length>1?n:o}))}));if(!this.search)return a;var e=this.search.toLowerCase(),s=function(t,a){var s=t.findIndex((function(t){return t.value.toString().toLowerCase().includes(e)}));return-1!==s};return a.filter(s)}},props:{data:Array,table:Object,search:String,refresh:String,header:Array,rows:Array,ButtonNew:Object,ButtonEdit:Object,ButtonDelete:Object,isLoading:Boolean},methods:{ClickTableOn:function(t,a){this.selected===t?(this.selected=null,this.action.show=!1):(this.selected=t,this.action.show=!0);var e=this.table.opened.indexOf(t);e>-1?this.table.opened.splice(e,1):this.table.opened.push(t)},refreshTable:function(){var t=this;i.post(this.refresh).then((function(a){t.table.data=a.data.data})).catch((function(t){console.log(t)}))},hapusdata:function(t){var a=this;i.post(this.ButtonDelete.url,{id:this.table.data[this.selected][this.ButtonDelete.params]}).then((function(t){a.refreshTable(),a.action.show=!1,a.dialogDelete=!1,a.toasNot=!0})).catch((function(t){console.log(t)}))}}},r=l,c=(e("a513"),e("2877")),u=Object(c["a"])(r,s,n,!1,null,null,null);a["a"]=u.exports},a0b8:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CRow",[e("CCol",{staticClass:"mb-5",attrs:{col:"12"}},[e("CRow",[e("CCol",{attrs:{col:"12"}},[e("h3",{staticClass:"font-weight-bold text-uppercase mb-1"},[t._v("modul Aplikasi")]),e("p",{staticClass:"text-primary text-sm-left mb-0"},[t._v(t._s(t.$options.identitas[0].instansi))]),e("p",{staticClass:"text-primary text-sm-left"},[t._v(t._s(t.$options.identitas[0].provinsi))])])],1)],1),e("CCol",{attrs:{col:"12"}},[e("tableta",{attrs:{table:t.table,isLoading:t.table.isLoading,data:t.table.data,header:t.table.header,rows:t.table.rows,ButtonNew:t.table.new,ButtonEdit:t.table.edit,refresh:t.table.refresh,ButtonDelete:t.table.delete,search:t.table.search}})],1)],1)},n=[],o=e("a832"),i=e("0cac"),l=e("bc3a"),r={name:"Modul",identitas:o["a"],components:{tableta:i["a"]},data:function(){return{table:{header:["Nama","Type","Child"],rows:["name","type","childcount"],data:[],activeItem:null,opened:[],search:null,isLoading:!0,new:{url:"modul/formulir/tambah/new",name:"Tambah Data"},edit:{url:"modul/formulir/edit",name:"Edit Data",params:"modul_id"},delete:{url:this.$options.identitas[0].url+"/modul?type=delete",params:"modul_id",dialog:"name"},refresh:this.$options.identitas[0].url+"/modul?type=dataByAll"}}},created:function(){this.getData()},methods:{getData:function(){var t=this;l.post(this.$options.identitas[0].url+"/modul?type=dataByAll").then((function(a){t.table.data=a.data.data,t.table.isLoading=!1})).catch((function(t){console.log(t)}))}}},c=r,u=e("2877"),d=Object(u["a"])(c,s,n,!1,null,null,null);a["default"]=d.exports},a513:function(t,a,e){"use strict";e("af07")},a832:function(t,a,e){"use strict";a["a"]=[{instansi:"Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu",alamat:"Gedung Raja Shahila Lt. 2 Pulau Dompak",distrik:"Pulau Dompak",provinsi:"Provinsi Kepulauan Riau",wHeight:window.innerHeight-380,url:"http://54.169.51.188/public/api"}]},af07:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5fa4ca19.261b7406.js.map