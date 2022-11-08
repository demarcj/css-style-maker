(function(){"use strict";var e={9218:function(e,t,s){var n=s(9242),o=s(8290),i=s(4275),l=(s(4415),s(3396));function a(e,t,s,n,o,i){const a=(0,l.up)("dialog-button"),r=(0,l.up)("dialog-content");return(0,l.wg)(),(0,l.j4)(r,{message:e.message,onClose:t[1]||(t[1]=t=>e.$emit("close"))},{default:(0,l.w5)((()=>[(0,l.Wm)(a,{show_apply:!1,onClose:t[0]||(t[0]=t=>e.$emit("close"))})])),_:1},8,["message"])}var r=(0,l.aZ)({props:{message:String}}),c=s(89);const d=(0,c.Z)(r,[["render",a]]);var _=d;function u(e,t,s,o,i,a){const r=(0,l.up)("dialog-button"),c=(0,l.up)("dialog-content");return(0,l.wg)(),(0,l.j4)(c,{message:e.message,onClose:t[3]||(t[3]=t=>e.$emit("close"))},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("input",{id:"txt",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.user_input=t),onKeyup:t[1]||(t[1]=(...t)=>e.check_input&&e.check_input(...t))},null,544),[[n.nr,e.user_input]]),(0,l.Wm)(r,{show_apply:!0,onUpdate:e.update,onClose:t[2]||(t[2]=t=>e.$emit("close"))},null,8,["onUpdate"])])),_:1},8,["message"])}var p=s(7139);const h={class:"dialog-container"},m={open:""},g={class:"message"};function y(e,t,s,n,o,i){return(0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",{class:"backdrop",onClick:t[0]||(t[0]=t=>e.$emit("close"))}),(0,l._)("dialog",m,[(0,l._)("div",g,(0,p.zw)(e.message),1),(0,l.WI)(e.$slots,"default")])])}var v=(0,l.aZ)({props:{message:String}});const w=(0,c.Z)(v,[["render",y]]);var f=w,j=(0,l.aZ)({components:{DialogContent:f},mounted(){const e=document.querySelector("#txt");e.focus()},props:{message:String},data(){return{user_input:""}},methods:{update(){""!==this.user_input&&this.$emit("update",this.user_input)},check_input(e){if(e.key.includes("Enter"))return this.update()}}});const k=(0,c.Z)(j,[["render",u]]);var b=k;function C(e,t,s,n,o,i){const a=(0,l.up)("dialog-button"),r=(0,l.up)("dialog-content");return(0,l.wg)(),(0,l.j4)(r,{message:e.message,onClose:t[2]||(t[2]=t=>e.$emit("close"))},{default:(0,l.w5)((()=>[(0,l.Wm)(a,{show_apply:!0,onUpdate:t[0]||(t[0]=t=>e.$emit("update")),onClose:t[1]||(t[1]=t=>e.$emit("close"))})])),_:1},8,["message"])}var S=(0,l.aZ)({props:{message:String}});const O=(0,c.Z)(S,[["render",C]]);var x=O;function $(e,t,s,n,o,i){const a=(0,l.up)("FontSize"),r=(0,l.up)("FontWeight"),c=(0,l.up)("dialog-button"),d=(0,l.up)("dialog-content");return(0,l.wg)(),(0,l.j4)(d,{message:e.message,onClose:t[1]||(t[1]=t=>e.$emit("close"))},{default:(0,l.w5)((()=>["font-size"===e.style?((0,l.wg)(),(0,l.j4)(a,{key:0,onUpdate:e.update,onUpdate_input:e.update_input},null,8,["onUpdate","onUpdate_input"])):(0,l.kq)("",!0),"font-weight"===e.style?((0,l.wg)(),(0,l.j4)(r,{key:1,onUpdate:e.update,onUpdate_input:e.update_input},null,8,["onUpdate","onUpdate_input"])):(0,l.kq)("",!0),(0,l.Wm)(c,{show_apply:!0,onUpdate:e.update,onClose:t[0]||(t[0]=t=>e.$emit("close"))},null,8,["onUpdate"])])),_:1},8,["message"])}function D(e,t,s,o,i,a){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{id:"input",type:"number",onKeyup:t[0]||(t[0]=(...t)=>e.update_input&&e.update_input(...t)),"onUpdate:modelValue":t[1]||(t[1]=t=>e.user_input=t)},null,544)),[[n.nr,e.user_input]])}var Z=(0,l.aZ)({mounted(){const e=document.querySelector("#input");e.focus()},emits:["update","update_input"],data(){return{user_input:"",selected_unit:"px"}},methods:{select_unit(){this.$emit("update_input",this.user_input+this.selected_unit)},update_input(e){""!==this.user_input&&(this.$emit("update_input",this.user_input+this.selected_unit),e.key.includes("Enter")&&this.$emit("update"))}}});const U=(0,c.Z)(Z,[["render",D]]);var z=U;function W(e,t,s,o,i,a){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{id:"input",type:"number",onKeyup:t[0]||(t[0]=(...t)=>e.update_input&&e.update_input(...t)),"onUpdate:modelValue":t[1]||(t[1]=t=>e.user_input=t)},null,544)),[[n.nr,e.user_input]])}var N=(0,l.aZ)({mounted(){const e=document.querySelector("#input");e.focus()},emits:["update","update_input"],data(){return{user_input:""}},methods:{update_input(e){""!==this.user_input&&(this.$emit("update_input",this.user_input),e.key.includes("Enter")&&this.$emit("update"))}}});const I=(0,c.Z)(N,[["render",W]]);var q=I,E=(0,l.aZ)({components:{FontSize:z,FontWeight:q},props:{message:String,style:String},data(){return{user_input:""}},methods:{update(){""!==this.user_input&&this.$emit("update",this.user_input)},update_input(e){this.user_input=e}}});const F=(0,c.Z)(E,[["render",$],["__scopeId","data-v-24c0f584"]]);var T=F;const H={class:"button-group"};function J(e,t,s,n,o,i){return(0,l.wg)(),(0,l.iD)("div",H,[e.show_apply?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"confirm-btn",onClick:t[0]||(t[0]=t=>e.$emit("update"))}," Apply ")):(0,l.kq)("",!0),(0,l._)("button",{class:"close-btn",onClick:t[1]||(t[1]=t=>e.$emit("close"))},"Close")])}var L=(0,l.aZ)({props:{show_apply:Boolean}});const V=(0,c.Z)(L,[["render",J],["__scopeId","data-v-3715a1b4"]]);var P=V;const M={class:"legend"},A={class:"fieldset-content"};function K(e,t,s,n,o,i){const a=(0,l.up)("font-size-menu"),r=(0,l.up)("font-weight-menu");return(0,l.wg)(),(0,l.iD)("fieldset",null,[(0,l._)("legend",M,(0,p.zw)(e.name)+": ",1),(0,l._)("div",A,[e.name.includes("font-size")?((0,l.wg)(),(0,l.j4)(a,{key:0,name:e.name,value:e.value,onChangeValue:e.change_value},null,8,["name","value","onChangeValue"])):(0,l.kq)("",!0),e.name.includes("font-weight")?((0,l.wg)(),(0,l.j4)(r,{key:1,name:e.name,value:e.value,onChangeValue:e.change_value},null,8,["name","value","onChangeValue"])):(0,l.kq)("",!0)])])}const Y=["value"],B={class:"value"};function R(e,t,s,n,o,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("input",{type:"number",value:e.real_data,onChange:t[0]||(t[0]=t=>e.changed_value(t))},null,40,Y),(0,l._)("div",B,(0,p.zw)(e.full_data),1)],64)}var X=(0,l.aZ)({emits:["change-value"],props:{name:{type:String,default:""},value:{type:String,default:""}},data(){return{real_data:"",full_data:""}},created(){this.get_data()},updated(){this.get_data()},methods:{changed_value(e){const t=e.target;this.get_data(t.value),this.$emit("change-value","font-size",t.value+"px")},get_data(e=""){e=e||this.value,"font-size"!==this.name||this.get_font_size(e)},get_font_size(e){this.real_data=e.replace(/[a-z]/g,"")+"",this.full_data=e}}});const G=(0,c.Z)(X,[["render",R]]);var Q=G;const ee=["value"],te={class:"value"};function se(e,t,s,n,o,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("input",{type:"number",min:"100",max:"900",step:"100",value:e.real_data,onChange:t[0]||(t[0]=t=>e.changed_value(t))},null,40,ee),(0,l._)("div",te,(0,p.zw)(e.full_data),1)],64)}var ne=(0,l.aZ)({emits:["change-value"],props:{name:{type:String,default:""},value:{type:String,default:""}},data(){return{real_data:"",full_data:""}},mounted(){this.get_data()},updated(){this.get_data()},methods:{changed_value(e){const t=e.target;this.get_data(t.value),this.$emit("change-value","font-weight",t.value)},get_data(e=""){e=e||this.value,"font-weight"!==this.name||this.get_font_weight(e)},get_font_weight(e){this.real_data=e,this.full_data=e}}});const oe=(0,c.Z)(ne,[["render",se]]);var ie=oe,le=(0,l.aZ)({emits:["change-value"],components:{FontSizeMenu:Q,FontWeightMenu:ie},props:{name:{type:String,default:""},value:{type:String,default:""}},methods:{change_value(e,t){this.$emit("change-value",e,t)}}});const ae=(0,c.Z)(le,[["render",K],["__scopeId","data-v-00ea8d8d"]]);var re=ae;const ce=e=>((0,l.dD)("data-v-67b4e355"),e=e(),(0,l.Cn)(),e),de={class:"main"},_e=ce((()=>(0,l._)("span",{class:"material-icons"}," close ",-1))),ue={class:"title"};function pe(e,t,s,n,o,i){const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("main",de,[(0,l.Wm)(a,{to:"/"},{default:(0,l.w5)((()=>[_e])),_:1}),(0,l._)("h1",ue,(0,p.zw)(e.title),1),(0,l.WI)(e.$slots,"default",{},void 0,!0)])}var he=(0,l.aZ)({props:{title:String}});const me=(0,c.Z)(he,[["render",pe],["__scopeId","data-v-67b4e355"]]);var ge=me;const ye={class:"app-body"},ve={class:"main-stage"},we={key:0,class:"page-view"};function fe(e,t,s,n,o,i){const a=(0,l.up)("Menu"),r=(0,l.up)("main-stage"),c=(0,l.up)("styling-stage"),d=(0,l.up)("layers"),_=(0,l.up)("Footer"),u=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ye,[(0,l.Wm)(a,{selected_element:e.selected_element,elements:e.elements,saved_projects:e.saved_projects,project_history:e.project_history,history_index:e.history_index,history_state:e.history_state,onNewProject:e.new_project,onOpenProject:e.open_project,onSave:e.save,onNewText:e.new_text,onExportStylings:e.export_stylings,onDeleteLayers:e.delete_layers,onDisplayWindow:e.display_window,onToHistory:e.go_to_history,onAddToIndex:e.add_to_index,onSetStyle:e.set_style},null,8,["selected_element","elements","saved_projects","project_history","history_index","history_state","onNewProject","onOpenProject","onSave","onNewText","onExportStylings","onDeleteLayers","onDisplayWindow","onToHistory","onAddToIndex","onSetStyle"]),(0,l._)("div",ve,[(0,l.Wm)(r,{elements:e.elements,is_ctrl:e.is_ctrl,onSelectedElement:e.set_select},null,8,["elements","is_ctrl","onSelectedElement"]),e.show_window.style?((0,l.wg)(),(0,l.j4)(c,{key:0,selected_element:e.selected_element,onChangeValue:e.change_value},null,8,["selected_element","onChangeValue"])):(0,l.kq)("",!0)]),e.show_window.layers?((0,l.wg)(),(0,l.j4)(d,{key:0,elements:e.elements,is_ctrl:e.is_ctrl,onSelectedElement:e.set_select},null,8,["elements","is_ctrl","onSelectedElement"])):(0,l.kq)("",!0),(0,l.Wm)(_)]),e.show_page_view?((0,l.wg)(),(0,l.iD)("div",we,[(0,l.Wm)(u)])):(0,l.kq)("",!0)],64)}var je=s(6035);const ke={id:"canvas",class:"canvas"},be=["onClick","id"];function Ce(e,t,s,n,o,i){return(0,l.wg)(),(0,l.iD)("section",ke,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.sort_element(),(t=>((0,l.wg)(),(0,l.iD)("div",{class:(0,p.C_)(["element-container",{[t.class_name]:t.class_name,selected:t.selected}]),onClick:s=>e.select_stage_element(t),id:t.id,key:t.id,style:(0,p.j5)(e.parseStyling(t.style_list))},(0,p.zw)(t.text),15,be)))),128))])}var Se=(0,l.aZ)({data(){return{elements_prop:{},elements_list:[]}},props:{elements:{type:Object,default:()=>({})},is_ctrl:Boolean},methods:{parseStyling(e){if(!e)return[];const t=Object.keys(e).map((t=>{const s={};return s[t]=e[t],s}));return t},sort_element(){return Object.keys(this.elements).map((e=>this.elements[e])).sort(((e,t)=>e.index-t.index))},select_stage_element(e){this.elements_prop=this.elements,this.is_ctrl||Object.keys(this.elements_prop).forEach((e=>{this.elements_prop[e].selected=!1})),this.elements_prop[e.id].selected=!e.selected,this.$emit("selected-element",this.elements_prop)}}});const Oe=(0,c.Z)(Se,[["render",Ce],["__scopeId","data-v-66ea58c8"]]);var xe=Oe;const $e=e=>((0,l.dD)("data-v-7e9997e4"),e=e(),(0,l.Cn)(),e),De=$e((()=>(0,l._)("div",null,"Delete Element",-1))),Ze=[De],Ue=$e((()=>(0,l._)("li",null,[(0,l._)("div",{id:"animation"},"Animation")],-1))),ze=(0,l.Uk)("No Reference"),We=(0,l.Uk)("Font Size"),Ne=(0,l.Uk)("Font Weight");function Ie(e,t,s,n,o,i){const a=(0,l.up)("router-link"),r=(0,l.up)("basic-dialog"),c=(0,l.up)("save-project-dialog"),d=(0,l.up)("open-project-dialog"),_=(0,l.up)("confirm-dialog"),u=(0,l.up)("prompt-dialog"),h=(0,l.up)("style-dialog");return(0,l.wg)(),(0,l.iD)("header",null,[(0,l._)("span",{class:"mobile-menu material-icons",onClick:t[0]||(t[0]=(...t)=>e.display_menu&&e.display_menu(...t))}," menu "),(0,l._)("ul",{id:"menu",class:(0,p.C_)(["menu",{"display-menu-mobile":e.show_menu_mobile}])},[(0,l._)("li",null,[(0,l._)("div",{id:"project",onClick:t[1]||(t[1]=t=>e.display_menu_list("project"))},"Project"),(0,l._)("ul",null,[(0,l._)("li",{class:(0,p.C_)({"disabled-item":!Object.keys(e.elements).length})},[(0,l._)("div",{onClick:t[2]||(t[2]=t=>e.open_confirm("Are you sure you want to start a new project?","new-project"))}," New Project ")],2),(0,l._)("li",{class:(0,p.C_)({"disabled-item":!Object.keys(e.saved_projects).length})},[(0,l._)("div",{onClick:t[3]||(t[3]=t=>e.open_project_prompt("Open project","open-project"))},"Open Project")],2),(0,l._)("li",{class:(0,p.C_)({"disabled-item":!Object.keys(e.elements).length})},[(0,l._)("div",{onClick:t[4]||(t[4]=t=>e.open_save_prompt("Save this project over...","save"))},"Save")],2),(0,l._)("li",{class:(0,p.C_)({"disabled-item":!Object.keys(e.elements).length})},[(0,l._)("a",{id:"export",onClick:t[5]||(t[5]=t=>e.export_stylings())},"Export")],2)])]),(0,l._)("li",null,[(0,l._)("div",{id:"edit",onClick:t[6]||(t[6]=t=>e.display_menu_list("edit"))},"Edit"),(0,l._)("ul",null,[(0,l._)("li",{onClick:t[7]||(t[7]=t=>e.delete_layers()),class:(0,p.C_)({"disabled-item":!Object.keys(e.selected_element).length})},Ze,2)])]),(0,l._)("li",null,[(0,l._)("div",{id:"element",onClick:t[8]||(t[8]=t=>e.display_menu_list("element"))},"Element"),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("div",{onClick:t[9]||(t[9]=t=>e.open_prompt("Name this element","new-text"))},"New Text")])])]),(0,l._)("li",null,[(0,l._)("div",{id:"style",onClick:t[10]||(t[10]=t=>e.display_menu_list("style"))},"Style"),(0,l._)("ul",null,[(0,l._)("li",{class:(0,p.C_)({"disabled-item":!e.selected_element?.text})},[(0,l._)("div",{id:"style_font",onClick:t[11]||(t[11]=t=>e.display_menu_list("style_font"))},"Font"),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("div",{onClick:t[12]||(t[12]=t=>e.open_style("Type in the font size","font-size"))},"Size")]),(0,l._)("li",null,[(0,l._)("div",{onClick:t[13]||(t[13]=t=>e.open_style("Type in the font weight","font-weight"))},"Weight")])])],2)])]),Ue,(0,l._)("li",null,[(0,l._)("div",{id:"reference",onClick:t[14]||(t[14]=t=>e.display_menu_list("reference"))},"Reference"),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:e.environment},{default:(0,l.w5)((()=>[ze])),_:1},8,["to"])]),(0,l._)("li",null,[(0,l._)("div",{id:"ref_font",onClick:t[15]||(t[15]=t=>e.display_menu_list("ref_font"))},"Font"),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:"/font-size"},{default:(0,l.w5)((()=>[We])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"/font-weight"},{default:(0,l.w5)((()=>[Ne])),_:1})])])])])]),(0,l._)("li",null,[(0,l._)("div",{id:"window",onClick:t[16]||(t[16]=t=>e.display_menu_list("window"))},"Window"),(0,l._)("ul",null,[(0,l._)("li",{class:(0,p.C_)({"show-item":e.show_style}),onClick:t[18]||(t[18]=t=>e.show_style=!e.show_style)},[(0,l._)("div",{onClick:t[17]||(t[17]=t=>e.$emit("display-window","style"))},"Style")],2),(0,l._)("li",{class:(0,p.C_)({"show-item":e.show_layers}),onClick:t[20]||(t[20]=t=>e.show_layers=!e.show_layers)},[(0,l._)("div",{onClick:t[19]||(t[19]=t=>e.$emit("display-window","layers"))},"Layers")],2)])]),(0,l._)("li",null,[(0,l._)("div",{id:"help",onClick:t[21]||(t[21]=t=>e.display_menu_list("help"))},"Help"),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("div",{onClick:t[22]||(t[22]=t=>e.open_dialog("Create HTML and export that HTML's styling as reference or use it in your project :)"))},"About...")])])])],2),e.show_dialog?((0,l.wg)(),(0,l.j4)(r,{key:0,onClose:e.close,message:e.message},null,8,["onClose","message"])):(0,l.kq)("",!0),e.show_save_project_dialog?((0,l.wg)(),(0,l.j4)(c,{key:1,message:e.message,saved_projects:e.saved_projects,onUpdate:e.update_prompt_dialog,onClose:e.close},null,8,["message","saved_projects","onUpdate","onClose"])):(0,l.kq)("",!0),e.show_open_project_dialog?((0,l.wg)(),(0,l.j4)(d,{key:2,message:e.message,saved_projects:e.saved_projects,onUpdate:e.update_prompt_dialog,onClose:e.close},null,8,["message","saved_projects","onUpdate","onClose"])):(0,l.kq)("",!0),e.show_confirm_dialog?((0,l.wg)(),(0,l.j4)(_,{key:3,onClose:e.close,onUpdate:e.update_confirm_dialog,message:e.message},null,8,["onClose","onUpdate","message"])):(0,l.kq)("",!0),e.show_prompt_dialog?((0,l.wg)(),(0,l.j4)(u,{key:4,onUpdate:e.update_prompt_dialog,onClose:e.close,message:e.message},null,8,["onUpdate","onClose","message"])):(0,l.kq)("",!0),e.show_style_dialog?((0,l.wg)(),(0,l.j4)(h,{key:5,onUpdate:e.update_style_dialog,onClose:e.close,style:(0,p.j5)(e.style),message:e.message},null,8,["onUpdate","onClose","style","message"])):(0,l.kq)("",!0)])}const qe=["value"],Ee=(0,l._)("div",{class:"new-save"},"Or save as a new project",-1);function Fe(e,t,s,o,i,a){const r=(0,l.up)("dialog-button"),c=(0,l.up)("dialog-content");return(0,l.wg)(),(0,l.j4)(c,{message:e.message,onClose:t[5]||(t[5]=t=>e.$emit("close"))},{default:(0,l.w5)((()=>[e.project_list.length?(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:0,class:"select",onChange:t[0]||(t[0]=(...t)=>e.select_project&&e.select_project(...t)),"onUpdate:modelValue":t[1]||(t[1]=t=>e.selected_project=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.project_list,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,p.zw)(e),9,qe)))),128))],544)),[[n.bM,e.selected_project]]):(0,l.kq)("",!0),Ee,(0,l.wy)((0,l._)("input",{id:"txt",type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.user_input=t),onKeyup:t[3]||(t[3]=(...t)=>e.check_input&&e.check_input(...t))},null,544),[[n.nr,e.user_input]]),(0,l.Wm)(r,{show_apply:!0,onUpdate:e.update,onClose:t[4]||(t[4]=t=>e.$emit("close"))},null,8,["onUpdate"])])),_:1},8,["message"])}var Te=(0,l.aZ)({components:{DialogContent:f},async created(){this.saved_projects&&(this.project_list=Object.keys(this.saved_projects),this.selected_project=this.project_list[0],this.user_input=this.project_list[0])},mounted(){const e=document.querySelector("#txt");e.focus()},props:{saved_projects:{type:Object,default:()=>({})},message:String},data(){return{user_input:"",project_list:[""],selected_project:""}},methods:{update(){""!==this.user_input&&this.$emit("update",this.user_input)},check_input(e){if(e.key.includes("Enter"))return this.update()},select_project(){this.user_input=this.selected_project}}});const He=(0,c.Z)(Te,[["render",Fe]]);var Je=He;const Le=["value"];function Ve(e,t,s,o,i,a){const r=(0,l.up)("dialog-button"),c=(0,l.up)("dialog-content");return(0,l.wg)(),(0,l.j4)(c,{message:e.message,onClose:t[3]||(t[3]=t=>e.$emit("close"))},{default:(0,l.w5)((()=>[e.project_list.length?(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:0,class:"select",onChange:t[0]||(t[0]=(...t)=>e.select_project&&e.select_project(...t)),"onUpdate:modelValue":t[1]||(t[1]=t=>e.selected_project=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.project_list,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,p.zw)(e),9,Le)))),128))],544)),[[n.bM,e.selected_project]]):(0,l.kq)("",!0),(0,l.Wm)(r,{show_apply:!0,onUpdate:e.update,onClose:t[2]||(t[2]=t=>e.$emit("close"))},null,8,["onUpdate"])])),_:1},8,["message"])}var Pe=(0,l.aZ)({components:{DialogContent:f},async created(){this.saved_projects&&(this.project_list=Object.keys(this.saved_projects),this.selected_project=this.project_list[0],this.user_input=this.project_list[0])},props:{saved_projects:{type:Object,default:()=>({})},message:String},data(){return{user_input:"",project_list:[""],selected_project:""}},methods:{update(){""!==this.user_input&&this.$emit("update",this.user_input)},check_input(e){if(e.key.includes("Enter"))return this.update()},select_project(){this.user_input=this.selected_project}}});const Me=(0,c.Z)(Pe,[["render",Ve]]);var Ae=Me,Ke=(0,l.aZ)({components:{SaveProjectDialog:Je,OpenProjectDialog:Ae},props:{selected_element:{type:Object,default:()=>({})},elements:{type:Object,default:()=>({})},saved_projects:{type:Object,default:()=>({})},project_history:{type:Array,default:()=>[]},history_index:{type:Number,default:0},history_state:{type:String,default:""}},data(){return{show_dialog:!1,show_confirm_dialog:!1,show_prompt_dialog:!1,show_style_dialog:!1,show_menu_mobile:!1,show_save_project_dialog:!1,show_open_project_dialog:!1,show_style:!0,show_layers:!0,show_history:!1,history_mode:!1,open_list_index:void 0,environment:window.location.hostname.includes("localhost")?"/":"/css-style-maker",style:"",action:"",message:"",projects:void 0===localStorage.getItem("projects")}},methods:{display_menu(){this.show_menu_mobile=!this.show_menu_mobile},display_menu_list(e){const t=document.querySelector(`#${e} ~ ul`);t.classList.toggle("opened-list")},go_to_history(e){let t;this.history_mode=!0;const s=this.project_history.findIndex((t=>t.id.includes(e.id)));s&&(t=this.project_history[s-1]),this.$emit("to-history",t)},undo(){let e;const t=this.project_history.findIndex((e=>e.id.includes(this.history_state)));t>=1&&(e=this.project_history[t-1]),this.$emit("to-history",e)},redo(){let e;const t=this.project_history.findIndex((e=>e.id.includes(this.history_state)));t<this.project_history.length&&(e=this.project_history[t]),this.$emit("to-history",e)},export_stylings(){Object.keys(this.elements).length>0&&this.$emit("export-stylings")},open_prompt(e,t){Object.keys(this.elements).length>=100?this.open_dialog("You have reached the max amount of layers"):(this.message=e,this.action=t,this.show_prompt_dialog=!0)},open_save_prompt(e,t){this.message=e,this.action=t,this.show_save_project_dialog=!0},open_project_prompt(e,t){Object.keys(this.elements).length>0&&(this.message=e,this.action=t,this.show_open_project_dialog=!0)},open_confirm(e,t){Object.keys(this.elements).length&&(this.message=e,this.action=t,this.show_confirm_dialog=!0)},open_style(e,t){this.selected_element&&(this.message=e,this.style=t,this.show_style_dialog=!0)},delete_layers(){Object.keys(this.selected_element).length>0&&this.$emit("delete-layers")},open_dialog(e){this.message=e,this.show_dialog=!0},close(){this.message="",this.style="",this.show_dialog=!1,this.show_confirm_dialog=!1,this.show_style_dialog=!1,this.show_prompt_dialog=!1,this.show_save_project_dialog=!1,this.show_open_project_dialog=!1},update_prompt_dialog(e){this.$emit(this.action,e),this.close()},update_style_dialog(e){this.$emit("set-style",e,this.style),this.close()},update_confirm_dialog(){this.$emit(this.action,!0),this.close()}}});const Ye=(0,c.Z)(Ke,[["render",Ie],["__scopeId","data-v-7e9997e4"]]);var Be=Ye;const Re=e=>((0,l.dD)("data-v-9883d228"),e=e(),(0,l.Cn)(),e),Xe={id:"layers",class:"layers"},Ge=Re((()=>(0,l._)("div",{class:"row table-header-row"},[(0,l._)("div",{class:"cell table-header"},"Index"),(0,l._)("div",{class:"cell table-header"},"Element / Layer Name"),(0,l._)("div",{class:"cell table-header"},"Timeline")],-1))),Qe={class:"table-row"},et=["onClick"],tt={class:"cell"},st={class:"cell"},nt=Re((()=>(0,l._)("div",{class:"cell"},null,-1)));function ot(e,t,s,n,o,i){return(0,l.wg)(),(0,l.iD)("section",Xe,[Ge,(0,l._)("div",Qe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.sort_element(),(t=>((0,l.wg)(),(0,l.iD)("div",{class:(0,p.C_)(["row",{selected:t.selected}]),key:t.id,onClick:s=>e.select_layers(t)},[(0,l._)("div",tt,(0,p.zw)(t.index),1),(0,l._)("div",st,(0,p.zw)(t.name),1),nt],10,et)))),128))])])}var it=(0,l.aZ)({props:{elements:{type:Object,default:()=>({})},is_ctrl:Boolean},data(){return{elements_prop:{}}},methods:{select_layers(e){this.elements_prop=this.elements,this.is_ctrl||Object.keys(this.elements_prop).map((e=>this.elements_prop[e].selected=!1)),this.elements_prop[e.id].selected=!e.selected,this.$emit("selected-element",this.elements_prop)},sort_element(){return Object.keys(this.elements).map((e=>this.elements[e])).sort(((e,t)=>e.index-t.index))}}});const lt=(0,c.Z)(it,[["render",ot],["__scopeId","data-v-9883d228"]]);var at=lt;const rt=e=>((0,l.dD)("data-v-2204d135"),e=e(),(0,l.Cn)(),e),ct={id:"style-info",class:"style-info"},dt=rt((()=>(0,l._)("div",{class:"style-header"},"Stylings",-1))),_t={key:0,class:"style-stage-container"},ut={class:"data-section"},pt={class:"name"},ht={class:"style_list"};function mt(e,t,s,n,o,i){const a=(0,l.up)("styling-input");return(0,l.wg)(),(0,l.iD)("section",ct,[dt,Object.keys(e.selected_element).length>0?((0,l.wg)(),(0,l.iD)("div",_t,[(0,l._)("div",ut,[(0,l._)("div",pt,(0,p.zw)(e.selected_element.name),1),(0,l._)("div",ht,"Class Name: "+(0,p.zw)(e.selected_element.class_name),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.selected_element.style_list,((t,s,n)=>((0,l.wg)(),(0,l.iD)("div",{class:"style_list",key:n},[(0,l.Wm)(a,{name:s,value:t,onChangeValue:e.change_value},null,8,["name","value","onChangeValue"])])))),128))])])):(0,l.kq)("",!0)])}var gt=(0,l.aZ)({emits:["change-value"],props:{selected_element:{type:Object,default:()=>({})}},methods:{change_value(e,t){this.$emit("change-value",e,t)}}});const yt=(0,c.Z)(gt,[["render",mt],["__scopeId","data-v-2204d135"]]);var vt=yt;const wt={class:"footer"};function ft(e,t,s,n,o,i){return(0,l.wg)(),(0,l.iD)("footer",wt,[(0,l._)("div",null,"©"+(0,p.zw)(e.get_year())+" DeMarc Johnson",1)])}var jt=(0,l.aZ)({methods:{get_year:()=>(new Date).getFullYear()}});const kt=(0,c.Z)(jt,[["render",ft],["__scopeId","data-v-9430de02"]]);var bt=kt,Ct=s(536),St=(0,l.aZ)({components:{MainStage:xe,Menu:Be,Layers:at,StylingStage:vt,Footer:bt},data(){return{elements:{},default_element:{},selected_element:{},is_ctrl:!1,windows:{},saved_projects:{},project_history:[],history_state:"",rewrite_history_mode:!1,history_index:0,show_page_view:!1,show_window:{style:!0,layers:!0}}},async created(){location.pathname===this.$route.path&&this.display_elements(this.$route.path),this.default_element.id=(0,Ct.Z)(),this.default_element.action="Default",this.history_state=this.default_element.id,this.default_element.project=JSON.parse(JSON.stringify(this.elements)),this.display_view(this.$route.path),this.saved_projects=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):{}},mounted(){const e=(e,t)=>{e.key.includes("Control")&&(this.is_ctrl=t)},t=t=>e(t,!1),s=t=>e(t,!0);document.addEventListener("keydown",s),document.addEventListener("keyup",t)},methods:{new_project(e){e&&(this.elements={},this.selected_element={})},save(e){let t;t=this.saved_projects?{...this.saved_projects,[e]:this.elements}:{[e]:this.elements},localStorage.setItem("projects",JSON.stringify(t)),this.saved_projects=t},open_project(e){const t=this.saved_projects[e];this.elements=t},export_stylings(){const e=this.parse_css(),t=document.querySelector("#canvas"),s=new Blob([e,t.innerHTML],{type:"text/html"}),n=document.querySelector("#export");n.download="animation.html",n.href=window.URL.createObjectURL(s)},parse_css(){const e=Object.keys(this.elements).map((e=>{const t=this.elements[e],s=`.${t.class_name}{\n`,n=Object.keys(t.style_list).map((e=>`${e}: ${t.style_list[e]};\n`));return s+n.join("")+"}\n"}));return`<style>\n${e.join("")}</style>\n      `},new_text(e){const t=(0,Ct.Z)(),s=Object.keys(this.elements).length?Object.keys(this.elements).length:0;this.elements[t]={},this.elements[t].id=t,this.elements[t].name=e,this.elements[t].class_name=e,this.elements[t].text=e,this.elements[t].index=s,this.elements[t].style_list={},this.elements[t].selected=!1,this.add_to_history("Create text element")},set_style(e,t){null!==e&&(this.elements[this.selected_element.id].style_list[t]=e,this.selected_element.style_list[t]=e,this.add_to_history(`${t.replaceAll("-"," ")} style`))},get_element_data(){if(!this.elements)return;const e=Object.keys(this.elements).filter((e=>this.elements[e].selected));if(1===e.length){const t=e[0];return this.selected_element={},void(this.selected_element=JSON.parse(JSON.stringify(this.elements[t])))}this.selected_element={}},set_select(e){this.elements=e;const t=Object.keys(this.elements).filter((e=>this.elements[e].selected));if(1===t.length)return this.selected_element={},void(this.selected_element=JSON.parse(JSON.stringify(this.elements[t[0]])));this.selected_element={}},delete_layers(){this.add_to_history("Delete layer"),Object.keys(this.elements).forEach((e=>{this.elements[e].selected&&delete this.elements[e]})),this.resort_index(),this.get_element_data()},resort_index(){Object.keys(this.elements).length&&Object.keys(this.elements).forEach(((e,t)=>this.elements[e].index=t))},display_window(e){this.show_window[e]=!this.show_window[e]},display_view(e){this.show_page_view="/"!==e&&!e.includes("css-style-maker")},async display_elements(e){this.elements={},this.selected_element={};const t="/"===e||e.includes("css-style-maker")?"home":e.substring(1,e.length),s=(0,je.ad)(),n=(0,je.hJ)(s,t),o=await(0,je.PL)(n);o.docs.forEach(((e,t)=>{this.elements[e.id]=e.data(),this.elements[e.id].id=e.id,0===t&&(this.selected_element=this.elements[e.id])}))},change_value(e,t){console.log(e,t),this.selected_element.style_list[e]=t,this.elements[this.selected_element.id].style_list[e]=t},go_to_history(e){this.elements=e?JSON.parse(JSON.stringify(e.project)):JSON.parse(JSON.stringify(this.default_element.project)),this.history_state=e?e.id:this.default_element.id},add_to_index(e){this.history_index=e>=this.project_history.length?this.project_history.length:e},add_to_history(e){const t={action:e,id:(0,Ct.Z)(),project:JSON.parse(JSON.stringify(this.elements))};this.rewrite_history_mode&&(this.project_history=this.project_history.filter(((e,t)=>t<=this.history_index)),this.rewrite_history_mode=!1),this.project_history=[...this.project_history,t],this.history_state=t.id}},watch:{$route(e){this.display_view(e.path),this.display_elements(e.path)}}});const Ot=(0,c.Z)(St,[["render",fe]]);var xt=Ot,$t=s(2483);const Dt={},Zt=Dt;var Ut=Zt;const zt=(0,l._)("div",null,"The font-size property sets the font size of the text.",-1);function Wt(e,t){const s=(0,l.up)("view-content");return(0,l.wg)(),(0,l.j4)(s,{title:"Font Size"},{default:(0,l.w5)((()=>[zt])),_:1})}const Nt={},It=(0,c.Z)(Nt,[["render",Wt]]);var qt=It;const Et=(0,l._)("div",null,"The font-weight CSS property sets the weight / boldness of the font.",-1);function Ft(e,t){const s=(0,l.up)("view-content");return(0,l.wg)(),(0,l.j4)(s,{title:"Font Weight"},{default:(0,l.w5)((()=>[Et])),_:1})}const Tt={},Ht=(0,c.Z)(Tt,[["render",Ft]]);var Jt=Ht;const Lt=e=>((0,l.dD)("data-v-d8575b8e"),e=e(),(0,l.Cn)(),e),Vt=Lt((()=>(0,l._)("div",null,"Check the top menu on the left for the 'Reference' tab and picking a page.",-1))),Pt=(0,l.Uk)("Or see the full size version of the app by clicking here "),Mt=(0,l.Uk)("Home"),At=(0,l.Uk)(". ");function Kt(e,t,s,n,o,i){const a=(0,l.up)("router-link"),r=(0,l.up)("view-content");return(0,l.wg)(),(0,l.j4)(r,{title:"404 Page Not Found"},{default:(0,l.w5)((()=>[Vt,(0,l._)("div",null,[Pt,(0,l.Wm)(a,{class:"home-link",to:e.environment},{default:(0,l.w5)((()=>[Mt])),_:1},8,["to"]),At])])),_:1})}var Yt=(0,l.aZ)({data(){return{environment:window.location.hostname.includes("localhost")?"/":"/css-style-maker"}}});const Bt=(0,c.Z)(Yt,[["render",Kt],["__scopeId","data-v-d8575b8e"]]);var Rt=Bt;const Xt=window.location.hostname.includes("localhost")?"/":"/css-style-maker",Gt=[{path:`${Xt}`,component:Ut},{path:"/font-size",component:qt},{path:"/font-weight",component:Jt},{path:"/:notFound(.*)",component:Rt}],Qt=(0,$t.p7)({history:(0,$t.PO)(""),routes:Gt});var es=Qt;const ts=(0,n.ri)(xt).use(es),ss={apiKey:"AIzaSyAaXjc7GFXQwXLii6FuHMcuN8pVzBWq5a4",authDomain:"css-style-maker-engine.firebaseapp.com",projectId:"css-style-maker-engine",storageBucket:"css-style-maker-engine.appspot.com",messagingSenderId:"813596944378",appId:"1:813596944378:web:0acb0e66c12f2820cba643"};(0,i.ZF)(ss),ts.component("basic-dialog",_),ts.component("prompt-dialog",b),ts.component("confirm-dialog",x),ts.component("style-dialog",T),ts.component("dialog-button",P),ts.component("dialog-content",f),ts.component("styling-input",re),ts.component("view-content",ge),ts.use(o.Z),ts.mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,i){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],i=e[d][2];for(var a=!0,r=0;r<n.length;r++)(!1&i||l>=i)&&Object.keys(s.O).every((function(e){return s.O[e](n[r])}))?n.splice(r--,1):(a=!1,i<l&&(l=i));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],a=n[1],r=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(r)var d=r(s)}for(t&&t(n);c<l.length;c++)i=l[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},n=self["webpackChunkcss_style_maker"]=self["webpackChunkcss_style_maker"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(9218)}));n=s.O(n)})();
//# sourceMappingURL=app.ee5cc738.js.map