(this["webpackJsonpbook-store-v2"]=this["webpackJsonpbook-store-v2"]||[]).push([[0],{211:function(e,t,a){e.exports=a(320)},290:function(e,t,a){var n={"./amplify-amazon-button_5.entry.js":[328,4],"./amplify-auth-fields_9.entry.js":[329,13],"./amplify-authenticator.entry.js":[330,5],"./amplify-button_3.entry.js":[331,6],"./amplify-checkbox.entry.js":[332,18],"./amplify-confirm-sign-in_8.entry.js":[333,7],"./amplify-container.entry.js":[334,19],"./amplify-federated-buttons_2.entry.js":[335,8],"./amplify-federated-sign-in.entry.js":[336,14],"./amplify-form-field_4.entry.js":[337,20],"./amplify-greetings.entry.js":[338,9],"./amplify-icon-button.entry.js":[339,21],"./amplify-icon.entry.js":[340,15],"./amplify-link.entry.js":[341,22],"./amplify-nav_2.entry.js":[342,10],"./amplify-radio-button_2.entry.js":[343,11],"./amplify-select-mfa-type.entry.js":[344,12],"./amplify-sign-in-button.entry.js":[345,16],"./amplify-tooltip.entry.js":[346,23]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=290,e.exports=r},318:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),l=a.n(c),o=a(29),i=a.n(o),s=a(17),m=a(54),u=a(20),d=a(165),p=a(321),b=a(422),f=r.a.createContext(),E=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1],E=Object(n.useState)([]),h=Object(u.a)(E,2),v=h[0],g=h[1],y=Object(n.useState)(!1),j=Object(u.a)(y,2),O=j[0],k=j[1];Object(n.useEffect)((function(){N()}),[]);var _=function(){var e=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(s.a)({id:Object(b.a)()},t),e.prev=1,e.next=4,d.a.graphql(Object(p.b)("\n  mutation ProcessOrder($input: ProcessOrderInput!) {\n    processOrder(input: $input)\n  }\n",{input:a}));case 4:console.log("Order is successful"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,d.a.graphql({query:"\n  query ListBooks(\n    $filter: ModelBookFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        title\n        description\n        image\n        author\n        featured\n        price\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",authMode:"API_KEY"});case 4:t=e.sent,a=t.data,n=a.listBooks.items,r=n.filter((function(e){return!!e.featured})),o(n),g(r),k(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{books:l,featured:v,loading:O,checkout:_}},t)},h=a(24),v=a(57),g=a(93),y=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("h2",null,"Vaccination Programs"),r.a.createElement(h.b,{className:"btn",to:"/books"},"View All Vaccine"))},j=function(){var e=Object(n.useContext)(f).featured;return e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("section",{className:"featured"},r.a.createElement("header",{className:"featured-head"},r.a.createElement("h3",null," Vaccine Featured Collection")),r.a.createElement("div",{className:"books featured-list"},e.map((function(e){var t=e.id,a=e.image,n=e.title;return r.a.createElement("article",{key:t,className:"book featured-book"},r.a.createElement("div",{className:"book-image"},r.a.createElement("img",{src:a,alt:n})),r.a.createElement(h.b,{to:"books/".concat(t),className:"btn book-link"}," Details"))}))))):r.a.createElement("h3",null,"No Featured Vaccine")},O=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Error 404: The page you request is not found! "))},k=function(){var e=Object(n.useContext)(f).books;return e.length?r.a.createElement("section",{className:"books"},e.map((function(e){var t=e.image,a=e.id,n=e.title;return r.a.createElement("article",{key:a,className:"book"},r.a.createElement("div",{className:"book-image"},r.a.createElement("img",{src:t,alt:n})),r.a.createElement(h.b,{to:"books/".concat(a),className:"btn book-link"},"details"))}))):r.a.createElement("h3",null,"No Vaccine Available")},_=a(63),N=r.a.createContext(),w=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(0),m=Object(u.a)(i,2),d=m[0],p=m[1];Object(n.useEffect)((function(){var e=Object(_.a)(l).reduce((function(e,t){return e+t.amount*t.price}),0);p(parseFloat(e.toFixed(2)))}),[l]);var b=function(e){var t=Object(_.a)(l).map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{amount:t.amount+1}):t}));o(t)};return r.a.createElement(N.Provider,{value:{cart:l,total:d,addToCart:function(e){var t=e.id,a=e.title,n=e.price,r=e.image;if(Object(_.a)(l).find((function(e){return e.id===t})))b(t);else{var c=[].concat(Object(_.a)(l),[{id:t,title:a,image:r,price:n,amount:1}]);o(c)}},increaseAmount:b,decreaseAmount:function(e,t){var a=[];a=1===t?Object(_.a)(l).filter((function(t){return t.id!==e})):Object(_.a)(l).map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{amount:t.amount-1}):t})),o(a)},clearCart:function(){o([])}}},t)},C=a(112),x=function(){var e=Object(v.f)(),t=Object(n.useContext)(N),a=t.cart,c=t.total,l=t.increaseAmount,o=t.decreaseAmount;return a.length?r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"My Cart")),r.a.createElement("div",{className:"cart-wrapper"},a.map((function(e){var t=e.id,a=e.title,n=e.price,c=e.image,i=e.amount;return r.a.createElement("article",{key:t,className:"cart-item"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:c,alt:"cart item"})),r.a.createElement("div",{className:"details"},r.a.createElement("p",null,a),r.a.createElement("p",null,"$ ",n)),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{onClick:function(){return l(t)}},r.a.createElement(C.b,null)),r.a.createElement("p",null,i),r.a.createElement("button",{onClick:function(){return o(t,i)}},r.a.createElement(C.a,null))))}))),r.a.createElement("div",null,r.a.createElement("h3",null,"Total: $ ",c)),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){return e.push("/checkout")}},"Checkout"))):r.a.createElement("h3",null,"Add an item to Cart")},S=a(421),A=a(172),T=a(61),D={style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},I=function(){var e=Object(n.useContext)(N),t=e.cart,a=e.total,c=(e.clearCart,Object(n.useContext)(f).checkout),l=Object(n.useState)({cart:t,total:a,address:null,token:null}),o=Object(u.a)(l,2),d=o[0],p=o[1],b=Object(n.useState)(null),E=Object(u.a)(b,2),h=E[0],g=E[1],y=Object(T.useStripe)(),j=Object(T.useElements)();Object(v.f)();Object(n.useEffect)((function(){d.token&&c(d)}),[d]);var O=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=j.getElement(T.CardElement),e.next=4,y.createToken(a);case 4:(n=e.sent).error?g(n.error.message):(g(null),r=n.token,p(Object(s.a)(Object(s.a)({},d),{},{token:r.id})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:"checkout-form"},r.a.createElement("label",{htmlFor:"checkout-address"},"Shipping Address"),r.a.createElement("input",{id:"checkout-address",type:"text",onChange:function(e){return p(Object(s.a)(Object(s.a)({},d),{},{address:e.target.value}))}}),r.a.createElement("div",{className:"stripe-section"},r.a.createElement("label",{htmlFor:"stripe-element"}," Credit or debit card "),r.a.createElement(T.CardElement,{id:"stripe-element",options:D,onChange:function(e){e.error?g(e.error.message):g(null)}})),r.a.createElement("div",{className:"card-errors",role:"alert"},h)),r.a.createElement("button",{type:"submit",className:"btn"},"Submit Payment"))},P=function(){var e=Object(A.a)("pk_test_51JY30vIGd2PKOEipzgAdfSXmqBbOlg4ExGrNDAJ3hF4Ivr5QpdJw66mO8v9tQUITR9zS6tAqcSI9rDfO9p9cT4M6001jMKH4PB");return r.a.createElement("section",{className:"checkout-wrapper"},r.a.createElement(S.a,null,r.a.createElement(T.Elements,{stripe:e},r.a.createElement("section",null,r.a.createElement("h2",null,"Cart Checkout"),r.a.createElement(I,null)))))},q=function(){var e=Object(v.g)().id,t=Object(v.f)(),a=Object(n.useContext)(f).books,c=Object(n.useContext)(N).addToCart,l=a.find((function(t){return t.id===e}));if(!l)return r.a.createElement("h3",null,"Fetching ...");var o=l.image,i=l.title,m=l.description,u=l.author,d=l.price;return r.a.createElement("section",{className:"book-details"},r.a.createElement("div",{className:"detail-image"},r.a.createElement("img",{src:o,alt:"10x Rule"})),r.a.createElement("div",{className:"detail-description"},r.a.createElement("h2",null,i),r.a.createElement("p",null,m),r.a.createElement("h3",null,u),r.a.createElement("h4",null,"Price - $ ",d),r.a.createElement("button",{className:"btn",onClick:function(){c(Object(s.a)(Object(s.a)({},l),{},{id:e})),t.push("/cart")}},"Add to Cart")))},F=a(159),$={aws_project_region:"us-east-2",aws_cognito_identity_pool_id:"us-east-2:3daaf292-3c57-45dc-b240-fd398749a9b3",aws_cognito_region:"us-east-2",aws_user_pools_id:"us-east-2_Ap07D1677",aws_user_pools_web_client_id:"5vil55mvacql1nqqulivsc4v33",oauth:{},aws_user_files_s3_bucket:"myvaccinef64cd17b5a7b40e6beb19db9206b2fc8121048-prod",aws_user_files_s3_bucket_region:"us-east-2",aws_appsync_graphqlEndpoint:"https://arqhnubiubhdzdyajwkvaealre.appsync-api.us-east-2.amazonaws.com/graphql",aws_appsync_region:"us-east-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_appsync_apiKey:"da2-sgpglx4lnngrnaabltfyunoqum",aws_content_delivery_bucket:"myvaccine-20210910221342-hostingbucket-prod",aws_content_delivery_bucket_region:"us-east-2",aws_content_delivery_url:"http://myvaccine-20210910221342-hostingbucket-prod.s3-website.us-east-2.amazonaws.com"},B=$.aws_user_files_s3_bucket_region,M=$.aws_user_files_s3_bucket,z=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({title:"",description:"",image:"",author:"",price:""}),o=Object(u.a)(l,2),f=o[0],E=o[1],h=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,f.title&&f.price){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,d.a.graphql(Object(p.b)("\n  mutation CreateBook(\n    $input: CreateBookInput!\n    $condition: ModelBookConditionInput\n  ) {\n    createBook(input: $input, condition: $condition) {\n      id\n      title\n      description\n      image\n      author\n      featured\n      price\n      orders {\n        items {\n          id\n          book_id\n          order_id\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",{input:f}));case 6:E({title:"",description:"",image:"",author:"",price:""}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Generating a log error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n,r,l,o,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.files[0],n=a.name.split(".")[1],r=a.name.split(".")[0],l="images/".concat(Object(b.a)()).concat(r,".").concat(n),o="https://".concat(M,".s3.").concat(B,".amazonaws.com/public/").concat(l),e.prev=6,e.next=9,F.a.put(l,a,{level:"public",contentType:a.type});case 9:return e.next=11,F.a.get(l,{level:"public"});case 11:m=e.sent,c(m),E(Object(s.a)(Object(s.a)({},f),{},{image:o})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"admin-wrapper"},r.a.createElement(S.a,null,r.a.createElement("section",null,r.a.createElement("header",{className:"form-header"},r.a.createElement("h3",null,"Add a new Vaccine"),r.a.createElement(S.b,null)),r.a.createElement("form",{className:"form-wrapper",onSubmit:h},r.a.createElement("div",{className:"form-image"},a?r.a.createElement("img",{className:"image-preview",src:a,alt:""}):r.a.createElement("input",{type:"file",accept:"image/jpg",onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-fields"},r.a.createElement("div",{className:"title-form"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"title"},"Vaccine title")),r.a.createElement("p",null,r.a.createElement("input",{name:"email",type:"title",placeholder:"Type the vaccine title",onChange:function(e){return E(Object(s.a)(Object(s.a)({},f),{},{title:e.target.value}))},required:!0}))),r.a.createElement("div",{className:"description-form"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"description"},"Vaccine Description")),r.a.createElement("p",null,r.a.createElement("textarea",{name:"description",type:"text",rows:"8",placeholder:"Type the vaccine description ",onChange:function(e){return E(Object(s.a)(Object(s.a)({},f),{},{description:e.target.value}))},required:!0}))),r.a.createElement("div",{className:"author-form"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"author"},"Company")),r.a.createElement("p",null,r.a.createElement("input",{name:"author",type:"text",placeholder:"Type the company name",onChange:function(e){return E(Object(s.a)(Object(s.a)({},f),{},{author:e.target.value}))},required:!0}))),r.a.createElement("div",{className:"price-form"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"price"},"Price ($)"),r.a.createElement("input",{name:"price",type:"text",placeholder:"Vaccine price in (USD)",onChange:function(e){return E(Object(s.a)(Object(s.a)({},f),{},{price:e.target.value}))},required:!0}))),r.a.createElement("div",{className:"featured-form"},r.a.createElement("p",null,r.a.createElement("label",null,"Do you want vaccine to be in feature page?"),r.a.createElement("input",{type:"checkbox",className:"featured-checkbox",checked:f.featured,onChange:function(){return E(Object(s.a)(Object(s.a)({},f),{},{featured:!f.featured}))}}))),r.a.createElement("div",{className:"submit-form"},r.a.createElement("button",{className:"btn",type:"submit"},"Submit")))))))},R=a(42),V=a.n(R),G=a(407),H=a(409),W=a(412),J=a(416),K=a(415),L=a(411),U=a(413),Q=a(419),Y=a(414),X=[{id:"country_name",label:"Region"},{id:"cases",label:"Cases"},{id:"deaths",label:"Death",align:"right",format:function(e){return e.toLocaleString()}},{id:"total_recovered",label:"Recovered",align:"right",format:function(e){return e.toLocaleString()}}],Z=Object(G.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"50vh"},table:{},tableHead:{padding:"5px 12px 5px 12px"},tableCell:{padding:"6px 12px 6px 12px"}});var ee=function(e){var t=e.data,a=e.updateDataDetails,n=t,c=Z(),l=r.a.useState(0),o=Object(u.a)(l,2),i=o[0],s=o[1],m=r.a.useState(10),d=Object(u.a)(m,2),p=d[0],b=d[1];return r.a.createElement(H.a,{className:c.root},r.a.createElement(L.a,{className:c.container},r.a.createElement(W.a,{className:c.table,stickyHeader:!0,"aria-label":"sticky table",size:"small"},r.a.createElement(U.a,null,r.a.createElement(Y.a,null,X.map((function(e){return r.a.createElement(K.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth},className:c.tableHead},e.label)})))),r.a.createElement(J.a,null,n.slice(i*p,i*p+p).map((function(e,t){return r.a.createElement(Y.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t,onClick:function(t){return function(e,t){console.log("row Clicked",t),a(t)}(0,e)}},X.map((function(t){var a=e[t.id];return r.a.createElement(K.a,{key:t.id,align:t.align,className:c.tableCell},t.format&&"number"===typeof a?t.format(a):a)})))}))))),r.a.createElement(Q.a,{rowsPerPageOptions:[10,20,40],component:"div",count:n.length,rowsPerPage:p,page:i,onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){b(+e.target.value),s(0)}}))},te=a(8),ae=a(25),ne=a(417),re=a(418),ce=a(420),le=Object(te.a)({root:{height:10,backgroundColor:Object(ae.d)("#161b31",.8)},bar:{borderRadius:20,backgroundColor:"#0023fb"}})(ne.a),oe=Object(te.a)({root:{height:10,backgroundColor:Object(ae.d)("#e31b2c",.5)},bar:{borderRadius:20,backgroundColor:"#e31b2c"}})(ne.a),ie=Object(te.a)({root:{height:10,backgroundColor:Object(ae.d)("#40a776",.5)},bar:{borderRadius:20,backgroundColor:"#40a776"}})(ne.a),se=(Object(te.a)({root:{height:10,backgroundColor:Object(ae.d)("#f97739",.5)},bar:{borderRadius:20,backgroundColor:"#f97739"}})(ne.a),Object(te.a)({root:{height:10,backgroundColor:Object(ae.d)("#f97739",.5)},bar:{borderRadius:20,backgroundColor:"#f97739"}})(ne.a)),me=Object(G.a)((function(e){return{root:{flexGrow:1},margin:{marginTop:4,marginBottom:4},header:{paddingTop:10,fontWeight:"bold"},gridBody:{fontSize:14,padding:10},bar_recovered:{background:"linear-gradient(to right, #430089, #82ffa1)"}}}));var ue=function(e){var t=e.data,a=me(),c=Object(n.useState)({}),l=Object(u.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){var e=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.cases;return console.log(e,a),Math.ceil(parseInt((e||"").replace(/,/g,""))/parseInt((a||"").replace(/,/g,""))*100)||0},a={totalCases:100,deaths:e(t.deaths),recovered:e(t.total_recovered),newDeaths:e(t.new_deaths),newCases:e(t.new_cases),seriousCritical:e(t.serious_critical),activeCases:e(t.active_cases),totalCasesPerM:e(t.total_cases_per_1m_population)};i(a),console.log(a)}),[t]),r.a.createElement(ce.a,null,r.a.createElement(H.a,null,r.a.createElement("div",{className:a.header},t.country_name),r.a.createElement(re.a,{container:!0,direction:"row",className:a.gridBody,spacing:5,justify:"space-evenly"},r.a.createElement(re.a,{item:!0,container:!0,direction:"column",xs:6,spacing:1},r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(re.a,{item:!0,xs:12,sm:!0,container:!0,justify:"space-between"},r.a.createElement(re.a,{item:!0},"Total cases"),r.a.createElement(re.a,{item:!0},t.cases||"NA")),r.a.createElement(re.a,{item:!0},r.a.createElement(le,{className:a.margin,variant:"determinate",color:"secondary",value:o.totalCases-2}))),r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(re.a,{item:!0,xs:12,sm:!0,container:!0,justify:"space-between"},r.a.createElement(re.a,{item:!0},"New cases"),r.a.createElement(re.a,{item:!0},t.new_cases||"NA")),r.a.createElement(re.a,{item:!0},r.a.createElement(se,{className:a.margin,variant:"determinate",color:"secondary",value:o.newCases}))),r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(re.a,{item:!0,xs:12,sm:!0,container:!0,justify:"space-between"},r.a.createElement(re.a,{item:!0},"Recovered"),r.a.createElement(re.a,{item:!0},t.total_recovered||"NA")),r.a.createElement(re.a,{item:!0},r.a.createElement(ie,{className:a.margin,variant:"determinate",color:"secondary",value:o.recovered}))),r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(re.a,{item:!0,xs:12,sm:!0,container:!0,justify:"space-between"},r.a.createElement(re.a,{item:!0},"Deaths"),r.a.createElement(re.a,{item:!0},t.deaths||"NA")),r.a.createElement(re.a,{item:!0},r.a.createElement(oe,{className:a.margin,variant:"determinate",color:"secondary",value:o.deaths}))),r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(re.a,{item:!0,xs:12,sm:!0,container:!0,justify:"space-between"},r.a.createElement(re.a,{item:!0},"New deaths"),r.a.createElement(re.a,{item:!0},t.new_deaths||"NA")),r.a.createElement(re.a,{item:!0},r.a.createElement(oe,{className:a.margin,variant:"determinate",color:"secondary",value:o.newDeaths})))))))},de=a(424),pe=a(425),be=a(423),fe=a(426);a(317),a(318);var Ee=function(e){var t=e.countries,a=(e.casesType,e.center),n=e.zoom,c=function(e){return(new Intl.NumberFormat).format(e)};return r.a.createElement("div",{className:"map"},r.a.createElement(de.a,{center:a,zoom:n},r.a.createElement(pe.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),t.map((function(e,t){return r.a.createElement(be.a,{key:t,center:[e.countryInfo.lat,e.countryInfo.long],color:"#ff0000",fillColor:"#ff0000",fillOpacity:.3,radius:500*Math.sqrt(e.cases)},r.a.createElement(fe.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",c(e.cases)),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",c(e.recovered)),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",c(e.deaths)))))}))))};var he=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),p=d[0],b=d[1];return Object(n.useEffect)((function(){V()({method:"GET",url:"https://corona-virus-world-and-india-data.p.rapidapi.com/api",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com","x-rapidapi-key":"c9ef826454msh3a40987d9db9f02p13b340jsna09a6f332d48"}}).then((function(e){var t=e.data.countries_stat,a=e.data.world_total,n={country_name:"World",cases:a.total_cases,deaths:a.total_deaths,total_recovered:a.total_recovered,new_cases:a.new_cases,new_deaths:a.new_deaths};t.unshift(n),c(t),s(n)})).catch((function(e){console.log(e)})),V()({method:"GET",url:"https://disease.sh/v3/covid-19/countries",headers:{}}).then((function(e){console.log(e),b(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{container:!0,justify:"center",direction:"column"},r.a.createElement("section",{className:"state"},r.a.createElement("h2",null,"Coronavirus Cases - Worldometer")),r.a.createElement(re.a,{item:!0,xs:!0,lg:12,mb:2},r.a.createElement(ce.a,null,r.a.createElement(ue,{data:i})),r.a.createElement(ce.a,{mt:4},r.a.createElement("section",{className:"state"},r.a.createElement("h2",null," Statistics on the COVID 19 by Country")),r.a.createElement(ee,{data:a,updateDataDetails:function(e){s(e)}}))),r.a.createElement("section",{className:"state"},r.a.createElement("h2",null,"COVID 19 MAP TRACKING")),r.a.createElement(re.a,{item:!0,xs:!0,lg:12},r.a.createElement(Ee,{countries:p,center:[20,40],zoom:2})))))},ve=function(){return r.a.createElement("header",{className:"main-head"},r.a.createElement("nav",null,r.a.createElement("h1",{id:"logo"},"Covid19VaccineProgram"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/books"},"Vaccines")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/cart"},"Cart")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/checkout"},"Checkout")))))},ge=a(188),ye=a(189),je=a(191),Oe=a(190),ke=function(e){Object(je.a)(a,e);var t=Object(Oe.a)(a);function a(){return Object(ge.a)(this,a),t.apply(this,arguments)}return Object(ye.a)(a,[{key:"componentDidMount",value:function(){!function(e,t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(a),window.kommunicate=t,t._globals={appId:"2e251783e0438aabd5a0ebaa93ca9e392",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(n.Component);g.default.configure($);var _e=function(){return r.a.createElement(h.a,null,r.a.createElement(ve,null),r.a.createElement(ke,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(v.a,{path:"/dashboard"},r.a.createElement(he,null)),r.a.createElement(v.a,{path:"/cart"},r.a.createElement(x,null)),r.a.createElement(v.a,{path:"/checkout"},r.a.createElement(P,null)),r.a.createElement(v.a,{exact:!0,path:"/books"},r.a.createElement(k,null)),r.a.createElement(v.a,{path:"/books/:id",children:r.a.createElement(q,null)}),r.a.createElement(v.a,{path:"/admin"},r.a.createElement(z,null)),r.a.createElement(v.a,{path:"*"},r.a.createElement(O,null))))};a(319);l.a.render(r.a.createElement(E,null,r.a.createElement(w,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)))),document.getElementById("root"))}},[[211,2,3]]]);
//# sourceMappingURL=main.fb3829b2.chunk.js.map