(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{225:function(e,n,t){var content=t(237);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(22).default)("52d55e70",content,!0,{sourceMap:!1})},236:function(e,n,t){"use strict";var r=t(225);t.n(r).a},237:function(e,n,t){(n=t(21)(!1)).push([e.i,"canvas{display:block;margin:0}",""]),e.exports=n},256:function(e,n,t){"use strict";t.r(n);var r=t(228),o={name:"THREETest",layout:"blog",data:function(){return{camera:null,test:null,scene:null,renderer:null,mesh:null,img:"../static/siteimg/1.jpg"}},mounted:function(){this.init(),this.animate()},methods:{init:function(){var e=document.getElementById("test");this.camera=new r.l(40,window.innerWidth/window.innerHeight,1,3500),this.camera.position.z=2750,this.scene=new r.o,this.scene.add(new r.a(4473924));var n=new r.e(16777215,"0.5");n.position.set(1,1,1),this.scene.add(n);var t=new r.e(16777215,1.5);t.position.set(0,-1,0),this.scene.add(t);for(var o=new r.c,d=[],h=[],c=[],l=new r.d,w=800,m=24,f=new r.q,v=new r.q,M=new r.q,x=new r.q,z=new r.q,i=0;i<8e4;i++){var y=Math.random()*w-400,E=Math.random()*w-400,R=Math.random()*w-400,W=y+Math.random()*m-12,H=E+Math.random()*m-12,k=R+Math.random()*m-12,A=y+Math.random()*m-12,j=E+Math.random()*m-12,B=R+Math.random()*m-12,P=y+Math.random()*m-12,S=E+Math.random()*m-12,U=R+Math.random()*m-12;d.push(W,H,k),d.push(A,j,B),d.push(P,S,U),f.set(W,H,k),v.set(A,j,B),M.set(P,S,U),x.subVectors(M,v),z.subVectors(f,v),x.cross(z),x.normalize();var C=x.x,I=x.y,J=x.z;h.push(C,I,J),h.push(C,I,J),h.push(C,I,J);var O=y/w+.5,T=E/w+.5,V=R/w+.5;l.setRGB(O,T,V),c.push(l.r,l.g,l.b),c.push(l.r,l.g,l.b),c.push(l.r,l.g,l.b)}function _(){this.array=null}o.addAttribute("position",new r.g(d,3).onUpload(_)),o.addAttribute("normal",new r.g(h,3).onUpload(_)),o.addAttribute("color",new r.g(c,3).onUpload(_)),o.computeBoundingSphere();var D=new r.k({color:11184810,specular:16777215,shininess:250,side:r.f,vertexColors:r.r});this.mesh=new r.h(o,D),this.scene.add(this.mesh),this.renderer=new r.s({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.gammaInput=!0,this.renderer.gammaOutput=!0,e.appendChild(this.renderer.domElement)},onWindowResize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},animate:function(){requestAnimationFrame(this.animate),this.render()},render:function(){var time=.001*Date.now();this.mesh.rotation.x=.25*time,this.mesh.rotation.y=.5*time,window.addEventListener("resize",this.onWindowResize,!0),this.renderer.render(this.scene,this.camera)}}},d=(t(236),t(11)),component=Object(d.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"test"}})}),[],!1,null,null,null);n.default=component.exports}}]);