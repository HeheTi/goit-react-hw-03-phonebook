(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),i=n(11),s=n(2),l=n(3),u=n(4),m=n(7),b=n(6),d=n(5),h=n(8),j=n(12),f=n(0),p=["label"],O=function(t){var e=t.label,n=Object(j.a)(t,p),a=Object(h.a)();return Object(f.jsxs)("div",{className:"wrapper-input",children:[Object(f.jsx)("label",{htmlFor:a,children:e}),Object(f.jsx)("input",Object(d.a)({id:a},n))]})},C=(n(18),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.addDataForm=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.onSubFormData=function(e){e.preventDefault(),(0,t.props.onSubmitForm)(Object(d.a)({id:Object(h.a)()},t.state)),t.resetForm()},t}return Object(u.a)(n,[{key:"resetForm",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.onSubFormData,className:"form",children:[Object(f.jsx)(O,{label:"Name",type:"text",name:"name",onChange:this.addDataForm,value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(f.jsx)(O,{label:"Number",type:"tel",name:"number",onChange:this.addDataForm,value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(f.jsx)("button",{type:"submit",children:" Add contact"})]})}}]),n}(a.Component)),v=C,g=function(t){var e=t.name,n=t.number,a=t.onClickBtnDel,r=t.id,c=t.normalizeName;return Object(f.jsxs)("li",{className:"item",id:r,children:[c(e),": ",n,Object(f.jsx)("button",{onClick:function(){return a(r)},type:"button",children:"Delete"})]})},x=function(t){var e=t.filterName,n=t.filterContacts,a=t.onClickBtnDel,r=t.onClickBtnChange,c=t.normalizeName;return Object(f.jsx)("ul",{className:"list",children:n(e).map((function(t){var e=t.id,n=t.name,o=t.number;return Object(f.jsx)(g,{id:e,name:n,number:o,onClickBtnDel:a,onClickBtnChange:r,normalizeName:c},e)}))})};var y=function(t){var e=t.onChangeDate,n=t.value;return Object(f.jsx)(O,{label:"Find contacts by name",type:"text",onChange:e,name:"filter",value:n})},k="contacts",D=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addDataApp=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.normalizeName=function(t){return t.split(" ").map((function(t){var e=t.charAt(0).toUpperCase(),n=t.substring(1);return"".concat(e).concat(n)})).join(" ")},t.addContacts=function(e){if(t.state.contacts.some((function(t){return t.name===e.name})))return alert("".concat(t.normalizeName(e.name)," is alredy in contacts."));t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(e){var n=e.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return null}}(k);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){return null}}(k,this.state.contacts)}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=t.contactForChange;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(v,{onSubmitForm:this.addContacts,dataForChange:a}),Object(f.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(f.jsx)(y,{onChangeDate:this.addDataApp,value:e}),!!n.length&&Object(f.jsx)(x,{normalizeName:this.normalizeName,onClickBtnDel:this.deleteContact,onClickBtnChange:this.changeFormAndDate,filterContacts:this.filterContacts,filterName:e})]})}}]),n}(a.Component),N=D;n(19);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.15bf8879.chunk.js.map