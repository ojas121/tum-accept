(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,a,t){e.exports=t(348)},207:function(e,a,t){},348:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),i=(t(207),t(20)),u=t(21),s=t(23),h=t(22),o=t(24),g=(t(59),t(17)),m=t(41),p=t(130),d=t(46),b=t(39),E=t.n(b),v=t(58),f=t.n(v),y=t(10),S=t.n(y),j=t(57),G=t.n(j),w=t(18),O=t.n(w),W=t(38),N=t.n(W),k=t(56),C=t.n(k),B=t(5),M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(h.a)(a).call(this,e))).onChange=function(e){var a=e.target.value;t.props.changeGrade(a,t.props.subject,"y"+t.props.year+"s"+t.props.sem),t.setState({value:a})},t.state={value:""},t}return Object(o.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{value:this.state.value,onChange:this.onChange,margin:"normal"})}}]),a}(r.a.Component),D=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(h.a)(a).call(this,e))).handleChange=function(e){t.setState({value:e.target.value}),t.props.change6(e.target.value)},t.state={value:"Science"},t}return Object(o.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B.b,{value:this.state.value,onChange:this.handleChange},r.a.createElement(B.a,{value:"Arts"},"Arts"),r.a.createElement(B.a,{value:"Humanities"},"Humanities"),r.a.createElement(B.a,{value:"Language"},"Language"),r.a.createElement(B.a,{value:"Science"},"Science")))}}]),a}(r.a.Component),T=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(h.a)(a).call(this,e))).change6=function(e){t.setState({type6:e}),t.props.changeType6(e)},t.changeGrade=function(e,a,n){var r=Object(p.a)({},t.state[a]);r[n]=e,console.log(r),t.setState(Object(m.a)({},a,r),function(){console.log(t.state)}),t.updateSuper(a,r),"y3s1"===n&&t.updateSuperFinal(a,e)},t.updateSuperFinal=function(e,a){t.props.changeFinalGrade(a,e)},t.updateSuper=function(e,a){var n=Number(a.y1s1);n+=Number(a.y1s2),n+=Number(a.y2s1),n+=Number(a.y2s2),n+=Number(a.y3s1),n/=5,t.props.changeGrade(n,e)},t.id=0,t.rows=[t.createData("Language 1",1),t.createData("Language 2",2),t.createData("Humanities",3),t.createData("Science",4),t.createData("Mathematics",5),t.createData(r.a.createElement(D,{change6:t.change6}),6),t.createData("Bonus","b")],t.changeGrade=t.changeGrade.bind(Object(d.a)(Object(d.a)(t))),t.state={},t}return Object(o.a)(a,e),Object(u.a)(a,[{key:"createData",value:function(e,a){return this.id+=1,"b"!==a?{id:this.id,sub:e,y1s2:r.a.createElement(M,{changeGrade:this.changeGrade,subject:a,year:1,sem:2}),y1s1:r.a.createElement(M,{changeGrade:this.changeGrade,subject:a,year:1,sem:1}),y2s1:r.a.createElement(M,{changeGrade:this.changeGrade,subject:a,year:2,sem:1}),y2s2:r.a.createElement(M,{changeGrade:this.changeGrade,subject:a,year:2,sem:2}),final:r.a.createElement(M,{changeGrade:this.changeGrade,subject:a,year:3,sem:1})}:{id:this.id,sub:e,y1s2:"",y1s1:"",y2s1:"",y2s2:"",final:r.a.createElement(M,{changeGrade:this.changeGrade,subject:a,year:3,sem:1})}}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(N.a,{className:e.root},r.a.createElement(E.a,{className:e.table},r.a.createElement(G.a,null,r.a.createElement(O.a,null,r.a.createElement(S.a,null,"Subject"),r.a.createElement(S.a,{align:"right"},"IB1 Sem 1"),r.a.createElement(S.a,{align:"right"},"IB1 Sem 2"),r.a.createElement(S.a,{align:"right"},"IB2 Sem 1"),r.a.createElement(S.a,{align:"right"},"IB2 Sem 2"),r.a.createElement(S.a,{align:"right"},"Final Score"))),r.a.createElement(f.a,null,this.rows.map(function(e){return r.a.createElement(O.a,{key:e.id},r.a.createElement(S.a,{component:"th",scope:"row"},e.sub),r.a.createElement(S.a,{align:"right"},e.y1s1),r.a.createElement(S.a,{align:"right"},e.y1s2),r.a.createElement(S.a,{align:"right"},e.y2s1),r.a.createElement(S.a,{align:"right"},e.y2s2),r.a.createElement(S.a,{align:"right"},e.final))}))))}}]),a}(r.a.Component),I=Object(g.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(T),A=t(28),F=t.n(A),x=t(29),H=t.n(x),L=t(30),J=t.n(L),P=t(40),V=t.n(P),z=t(37),X=t.n(z),q=t(25),K=t(45),Q=t.n(K),R=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(h.a)(a).call(this,e))).preset=function(e){"mw"===e?(t.changeSubWeight(0,1),t.changeSubWeight(1,2),t.changeSubWeight(0,3),t.changeSubWeight(2,4),t.changeSubWeight(3,5),t.changeSubWeight(2,6)):(t.changeSubWeight(1,1),t.changeSubWeight(1,2),t.changeSubWeight(0,3),t.changeSubWeight(1,4),t.changeSubWeight(2,5),t.changeSubWeight(1,6))},t.state={g1:null,g2:null,g3:null,g4:null,g5:null,g6:null,bonus:0,totalWeight:null},t}return Object(o.a)(a,e),Object(u.a)(a,[{key:"changeSubWeight",value:function(e,a){this.setState(Object(m.a)({},"g"+a,e)),this.props.changeSubjectWeight(e,a)}},{key:"changeTotalWeight",value:function(e){this.setState({totalWeight:e}),this.props.changeTotalWeight(e)}},{key:"changeBonus",value:function(e){this.setState({bonus:e}),this.props.changeBonus(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B.d,{variant:"overline"},"Presets: "),r.a.createElement(Q.a,{onClick:function(){return e.preset("mw")}},"Maschinenwesen"),r.a.createElement(Q.a,{onClick:function(){return e.preset("es")}},"Engineering Science"),r.a.createElement(B.d,{variant:"overline"},"Options: "),r.a.createElement(E.a,null,r.a.createElement("tbody",null,r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(B.d,null,"Group 1")),r.a.createElement(S.a,null,r.a.createElement(B.c,{value:this.state.g1,onChange:function(a){return e.changeSubWeight(a.target.value,1)}}))),r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(B.d,null,"Group 2")),r.a.createElement(S.a,null,r.a.createElement(B.c,{value:this.state.g2,onChange:function(a){return e.changeSubWeight(a.target.value,2)}}))),r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(B.d,null,"Group 3")),r.a.createElement(S.a,null,r.a.createElement(B.c,{value:this.state.g3,onChange:function(a){return e.changeSubWeight(a.target.value,3)}}))),r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(B.d,null,"Group 4")),r.a.createElement(S.a,null,r.a.createElement(B.c,{value:this.state.g4,onChange:function(a){return e.changeSubWeight(a.target.value,4)}}))),r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(B.d,null,"Group 5")),r.a.createElement(S.a,null,r.a.createElement(B.c,{value:this.state.g5,onChange:function(a){return e.changeSubWeight(a.target.value,5)}}))),r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(B.d,null,"Group 6")),r.a.createElement(S.a,null,r.a.createElement(B.c,{value:this.state.g6,onChange:function(a){return e.changeSubWeight(a.target.value,6)}}))),r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(B.d,null,"Bonus Points")),r.a.createElement(S.a,null,r.a.createElement(B.c,{value:this.state.bonus,onChange:function(a){return e.changeBonus(a.target.value)}}))))))}}]),a}(r.a.Component),U=(Object(g.withStyles)({})(R),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(u.a)(a,[{key:"calculateScore",value:function(){var e=0,a=0;this.props.finalGrades.forEach(function(e){var t=100-20*(7-Number(e));a+=t}),e+=.65*(a/=6),console.log(a);for(var t=0,n=0,r=0;r<6;r++){t+=(100-20*(7-Number(this.props.avgGrades[r])))*Number(this.props.subjectWeighting[r]),n+=Number(this.props.subjectWeighting[r]),console.log(this.props.subjectWeighting[r])}return e+=.35*t/n,e+=Number(this.props.bonus)}},{key:"mw",value:function(){var e=this,a=0,t=0;this.props.avgGrades.forEach(function(t){a+=Number(e.convert(t))}),t+=.65*(a/=6);var n=[];this.props.finalGrades.forEach(function(a){n.push(e.convert(a))});var l=0;return l+=Number(n[1]),l+=2*Number(n[3]),l+=3*Number(n[4]),"Science"===this.props.type6?(l+=2*Number(n[5]),l/=8):l/=6,t+=.35*l,t=Math.round(t),(t+=this.props.bonus)<0||isNaN(t)||null==t?r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"subtitle1"},"Score cannot be calculated")):t>=75?r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"h6"},Math.round(t)),r.a.createElement(B.d,{variant:"subtitle1"},"Accepted")):t>67?r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"h6"},Math.round(t)),r.a.createElement(B.d,{variant:"subtitle1"},"Interview")):r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"h6"},Math.round(t)),r.a.createElement(B.d,{variant:"subtitle1"},"Declined"))}},{key:"es",value:function(){var e=this,a=0,t=0;this.props.avgGrades.forEach(function(t){a+=Number(e.convert(t))}),t+=.65*(a/=6);var n=[];this.props.finalGrades.forEach(function(a){n.push(e.convert(a))});var l=0;return l+=Number(n[0]),l+=Number(n[1]),l+=Number(n[3]),l+=2*Number(n[4]),"Science"===this.props.type6?(l+=Number(n[5]),l/=6):l/=5,t+=.35*l,t=Math.round(t),(t+=this.props.bonus)<0||isNaN(t)||null==t?r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"subtitle1"},"Score cannot be calculated")):t>=82?r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"h6"},Math.round(t)),r.a.createElement(B.d,{variant:"subtitle1"},"Accepted")):t>74?r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"h6"},Math.round(t)),r.a.createElement(B.d,{variant:"subtitle1"},"Interview")):r.a.createElement("span",{style:{whiteSpace:"nowrap"}},r.a.createElement(B.d,{variant:"h6"},Math.round(t)),r.a.createElement(B.d,{variant:"subtitle1"},"Declined"))}},{key:"convert",value:function(e){return 100-20*(7-Number(e))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B.d,{variant:"overline"},"Maschinenwesen: "),this.mw(),r.a.createElement(B.d,{variant:"overline"},"Engineering Science: "),this.es())}}]),a}(r.a.Component)),Y=(X()({palette:{primary:{light:q.purple[300],main:q.purple[500],dark:q.purple[700]},secondary:{light:q.teal[300],main:q.teal[500],dark:q.teal[700]}},typography:{useNextVariants:!0}}),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(h.a)(a).call(this,e))).changeGrade=function(e,a){var n=t.state.avgGrades;n[a-1]=e,t.setState({avgGrades:n},function(){return console.log(t.state.avgGrades)})},t.changeFinalGrade=function(e,a){var n=t.state.finalGrades;n[a-1]=e,t.setState({finalGrades:n},function(){return console.log(t.state)})},t.changeBonus=function(e){t.setState({bonus:e})},t.changeSubjectWeighting=function(e,a){var n=t.state.subjectWeighting;n[a-1]=e,t.setState({avgGrades:n})},t.changeTotalWeighting=function(e){t.setState({totalWeight:e})},t.changeType6=function(e){t.setState({type6:e}),console.log(e)},t.state={avgGrades:[null,null,null,null,null,null],finalGrades:[null,null,null,null,null,null],bonus:0,type6:"Arts"},t}return Object(o.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.App},r.a.createElement(F.a,{container:!0,spacing:16,className:e.grid},r.a.createElement(F.a,{item:!0,md:3},r.a.createElement(H.a,null,r.a.createElement(J.a,{title:"Choices"}),r.a.createElement(V.a,null,"Instructions"))),r.a.createElement(F.a,{item:!0,md:6},r.a.createElement(H.a,null,r.a.createElement(J.a,{title:"Grades"}),r.a.createElement(I,{changeGrade:this.changeGrade,changeBonus:this.changeBonus,changeFinalGrade:this.changeFinalGrade,changeType6:this.changeType6}))),r.a.createElement(F.a,{item:!0,md:3},r.a.createElement(H.a,null,r.a.createElement(J.a,{title:"Verdict"}),r.a.createElement(V.a,null,r.a.createElement(U,{avgGrades:this.state.avgGrades,bonus:this.state.bonus,finalGrades:this.state.finalGrades,type6:this.state.type6}))))))}}]),a}(n.Component)),Z=Object(g.withStyles)(function(e){return{card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},App:{backgroundColor:e.palette.background.default,height:"100%",width:"100%"},grid:{maxHeight:"100%",maxWidth:"100%",margin:0}}},{withTheme:!0})(Y);c.a.render(r.a.createElement(Z,null),document.getElementById("root"))},59:function(e,a,t){}},[[202,1,2]]]);
//# sourceMappingURL=main.8700583b.chunk.js.map