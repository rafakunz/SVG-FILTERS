var saturateSlider=document.getElementById("slider-saturate");noUiSlider.create(saturateSlider,{start:[0],step:5,range:{min:[0],max:[30]},pips:{mode:"values",values:[0,5,10,15,20,25,30],density:10}});var inputFormat=document.getElementById("input-format");inputFormat.addEventListener("change",function(){saturateSlider.noUiSlider.set(this.value)}),saturateSlider.noUiSlider.on("change",function(){var e=saturateSlider.noUiSlider.get(),t=document.getElementById("saturate-value"),n=document.getElementById("panel-code-saturate");t.setAttributeNS(null,"values",e),$(n).text('<filter id="saturate-customize">\n <feColorMatrix type="saturate" values="'+e+'"/>\n</filter>'),inputFormat.value=values[handle]});var stepSliderValueElement=document.getElementById("slider-saturate-value");saturateSlider.noUiSlider.on("update",function(e,t){stepSliderValueElement.innerHTML=e[t]});var firsthueRotateSlider=document.getElementById("slider-huerotate");noUiSlider.create(firsthueRotateSlider,{start:[180],step:1,range:{min:[0],max:[360]},pips:{mode:"values",values:[0,90,180,270,360],density:5}}),firsthueRotateSlider.noUiSlider.on("change",function(){var e=firsthueRotateSlider.noUiSlider.get(),t=document.getElementById("hue-value"),n=document.getElementById("panel-code-huerotate");t.setAttributeNS(null,"values",e),$(n).text('<filter id="saturate-customize">\n <feColorMatrix type="hueRotate" values="'+e+'"/>\n</filter>')});var stepSliderValueHueElement=document.getElementById("slider-huerotate-value");firsthueRotateSlider.noUiSlider.on("update",function(e,t){stepSliderValueHueElement.innerHTML=e[t]});var feGammaRa=document.getElementById("slider-gamma-ra");noUiSlider.create(feGammaRa,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),feGammaRa.noUiSlider.on("change",function(){var e=feGammaRa.noUiSlider.get(),t=feGammaRe.noUiSlider.get(),n=feGammaGa.noUiSlider.get(),i=feGammaGe.noUiSlider.get(),l=feGammaBa.noUiSlider.get(),r=feGammaBe.noUiSlider.get(),a=document.getElementById("r-gamma"),d=document.getElementById("panel-code-gamma");a.getAttribute("amplitude");a.setAttributeNS(null,"amplitude",e),$(d).text('<filter id="gamma">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="'+e+'" exponent="'+t+'"/>\n<feFuncG type="gamma" amplitude="'+n+'" exponent="'+i+'"/>\n<feFuncB type="gamma" amplitude="'+l+'" exponent="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementfeGammaRa=document.getElementById("slider-gamma-ra-value");feGammaRa.noUiSlider.on("update",function(e,t){stepSliderValueElementfeGammaRa.innerHTML=e[t]});var feGammaRe=document.getElementById("slider-gamma-re");noUiSlider.create(feGammaRe,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),feGammaRe.noUiSlider.on("change",function(){var e=feGammaRa.noUiSlider.get(),t=feGammaRe.noUiSlider.get(),n=feGammaGa.noUiSlider.get(),i=feGammaGe.noUiSlider.get(),l=feGammaBa.noUiSlider.get(),r=feGammaBe.noUiSlider.get(),a=document.getElementById("r-gamma"),d=document.getElementById("panel-code-gamma");a.getAttribute("exponent");a.setAttributeNS(null,"exponent",t),$(d).text('<filter id="gamma">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="'+e+'" exponent="'+t+'"/>\n<feFuncG type="gamma" amplitude="'+n+'" exponent="'+i+'"/>\n<feFuncB type="gamma" amplitude="'+l+'" exponent="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementfeGammaRe=document.getElementById("slider-gamma-re-value");feGammaRe.noUiSlider.on("update",function(e,t){stepSliderValueElementfeGammaRe.innerHTML=e[t]});var feGammaGa=document.getElementById("slider-gamma-ga");noUiSlider.create(feGammaGa,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),feGammaGa.noUiSlider.on("change",function(){var e=feGammaRa.noUiSlider.get(),t=feGammaRe.noUiSlider.get(),n=feGammaGa.noUiSlider.get(),i=feGammaGe.noUiSlider.get(),l=feGammaBa.noUiSlider.get(),r=feGammaBe.noUiSlider.get(),a=document.getElementById("g-gamma"),d=document.getElementById("panel-code-gamma");a.getAttribute("amplitude");a.setAttributeNS(null,"amplitude",n),$(d).text('<filter id="gamma">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="'+e+'" exponent="'+t+'"/>\n<feFuncG type="gamma" amplitude="'+n+'" exponent="'+i+'"/>\n<feFuncB type="gamma" amplitude="'+l+'" exponent="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementfeGammaGa=document.getElementById("slider-gamma-ra-value");feGammaGa.noUiSlider.on("update",function(e,t){stepSliderValueElementfeGammaGa.innerHTML=e[t]});var feGammaGe=document.getElementById("slider-gamma-ge");noUiSlider.create(feGammaGe,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),feGammaGe.noUiSlider.on("change",function(){var e=feGammaRe.noUiSlider.get(),t=feGammaRa.noUiSlider.get(),n=feGammaGa.noUiSlider.get(),i=feGammaGe.noUiSlider.get(),l=feGammaBa.noUiSlider.get(),r=feGammaBe.noUiSlider.get(),a=document.getElementById("g-gamma"),d=document.getElementById("panel-code-gamma");a.getAttribute("amplitude");a.setAttributeNS(null,"amplitude",i),$(d).text('<filter id="gamma">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="'+t+'" exponent="'+e+'"/>\n<feFuncG type="gamma" amplitude="'+n+'" exponent="'+i+'"/>\n<feFuncB type="gamma" amplitude="'+l+'" exponent="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementfeGammaGe=document.getElementById("slider-gamma-ge-value");feGammaGe.noUiSlider.on("update",function(e,t){stepSliderValueElementfeGammaGe.innerHTML=e[t]});var feGammaBa=document.getElementById("slider-gamma-ba");noUiSlider.create(feGammaBa,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),feGammaBa.noUiSlider.on("change",function(){var e=feGammaRa.noUiSlider.get(),t=feGammaRe.noUiSlider.get(),n=feGammaGa.noUiSlider.get(),i=feGammaGe.noUiSlider.get(),l=feGammaBa.noUiSlider.get(),r=feGammaBe.noUiSlider.get(),a=document.getElementById("b-gamma"),d=document.getElementById("panel-code-gamma");a.getAttribute("amplitude");a.setAttributeNS(null,"amplitude",l),$(d).text('<filter id="gamma">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="'+e+'" exponent="'+t+'"/>\n<feFuncG type="gamma" amplitude="'+n+'" exponent="'+i+'"/>\n<feFuncB type="gamma" amplitude="'+l+'" exponent="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementfeGammaBa=document.getElementById("slider-gamma-ba-value");feGammaBa.noUiSlider.on("update",function(e,t){stepSliderValueElementfeGammaBa.innerHTML=e[t]});var feGammaBe=document.getElementById("slider-gamma-be");noUiSlider.create(feGammaBe,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),feGammaBe.noUiSlider.on("change",function(){var e=feGammaRa.noUiSlider.get(),t=feGammaRe.noUiSlider.get(),n=feGammaGa.noUiSlider.get(),i=feGammaGe.noUiSlider.get(),l=feGammaBa.noUiSlider.get(),r=feGammaBe.noUiSlider.get(),a=document.getElementById("b-gamma"),d=document.getElementById("panel-code-gamma");a.getAttribute("exponent");a.setAttributeNS(null,"exponent",r),$(d).text('<filter id="gamma">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="'+e+'" exponent="'+t+'"/>\n<feFuncG type="gamma" amplitude="'+n+'" exponent="'+i+'"/>\n<feFuncB type="gamma" amplitude="'+l+'" exponent="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementfeGammaBe=document.getElementById("slider-gamma-be-value");feGammaBe.noUiSlider.on("update",function(e,t){stepSliderValueElementfeGammaBe.innerHTML=e[t]});var blurSlider=document.getElementById("slider-blur");noUiSlider.create(blurSlider,{start:[0],step:1,range:{min:[0],max:[20]},pips:{mode:"values",values:[0,5,10,15,20],density:10}}),blurSlider.noUiSlider.on("change",function(){var e=blurSlider.noUiSlider.get(),t=document.getElementById("blur-value"),n=document.getElementById("panel-code-blur");t.setAttributeNS(null,"stdDeviation",e),$(n).text('<filter id="blur-customize">\n <feGaussianBlur stdDeviation="'+e+'"/>\n</filter>')});var stepSliderValueBlurElement=document.getElementById("slider-blur-value");blurSlider.noUiSlider.on("update",function(e,t){stepSliderValueBlurElement.innerHTML=e[t]});var morphoSlider=document.getElementById("slider-morpho");noUiSlider.create(morphoSlider,{start:[0],step:1,range:{min:[0],max:[20]},pips:{mode:"values",values:[0,5,10,15,20],density:10}}),morphoSlider.noUiSlider.on("change",function(){var e=morphoSlider.noUiSlider.get(),t=document.getElementById("morpho-value"),n=document.getElementById("panel-code-morpho");t.setAttributeNS(null,"radius",e),$(n).text('<filter id="morpho-customize">\n <feGaussianBlur operator="erode" in="SourceGraphic" radius="'+e+'"/>\n</filter>')});var stepSliderValueMorphoElement=document.getElementById("slider-morpho-value");morphoSlider.noUiSlider.on("update",function(e,t){stepSliderValueMorphoElement.innerHTML=e[t]});var morphoDilateSlider=document.getElementById("slider-morpho-dilate");noUiSlider.create(morphoDilateSlider,{start:[0],step:1,range:{min:[0],max:[20]},pips:{mode:"values",values:[0,5,10,15,20],density:10}}),morphoDilateSlider.noUiSlider.on("change",function(){var e=morphoDilateSlider.noUiSlider.get(),t=document.getElementById("morpho-dilate-value"),n=document.getElementById("panel-code-morpho-dilate");t.setAttributeNS(null,"radius",e),$(n).text('<filter id="morpho-customize">\n <feGaussianBlur operator="dilate" in="SourceGraphic" radius="'+e+'"/>\n</filter>')});var stepSliderValueDilateMorphoElement=document.getElementById("slider-morpho-dilate-value");morphoDilateSlider.noUiSlider.on("update",function(e,t){stepSliderValueDilateMorphoElement.innerHTML=e[t]});var saturotateSlider=document.getElementById("slider-saturotate");noUiSlider.create(saturotateSlider,{start:[0],step:5,range:{min:[0],max:[50]},pips:{mode:"values",values:[0,10,20,30,40,50],density:5}}),saturotateSlider.noUiSlider.on("change",function(){var e=saturotateSlider.noUiSlider.get(),t=hueRotateSlider.noUiSlider.get(),n=document.getElementById("saturotate-value"),i=document.getElementById("panel-code-saturotate");n.setAttributeNS(null,"values",e),$(i).text('<filter <filter id="saturotate-customize" filterUnits="objectBoundingBox">\n <feColorMatrix type="saturate" result="saturado" values="'+e+'"/>\n <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="'+t+'"/>\n</filter>')});var stepSliderValueSaturotateElement=document.getElementById("slider-saturotate-value");saturotateSlider.noUiSlider.on("update",function(e,t){stepSliderValueSaturotateElement.innerHTML=e[t]});var hueRotateSlider=document.getElementById("slider-saturotate-huerotate");noUiSlider.create(hueRotateSlider,{start:[180],step:1,range:{min:[0],max:[360]},pips:{mode:"values",values:[0,90,180,270,360],density:5}}),hueRotateSlider.noUiSlider.on("change",function(){var e=saturotateSlider.noUiSlider.get(),t=hueRotateSlider.noUiSlider.get(),n=document.getElementById("saturotate-hue-value"),i=document.getElementById("panel-code-saturotate");n.setAttributeNS(null,"values",t),$(i).text('<filter id="saturotate-customize" filterUnits="objectBoundingBox">\n <feColorMatrix type="saturate" result="saturado" values="'+e+'"/>\n <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="'+t+'"/>\n</filter>')});var stepSliderValueHueRotateElement=document.getElementById("slider-saturotate-huerotate-value");hueRotateSlider.noUiSlider.on("update",function(e,t){stepSliderValueHueRotateElement.innerHTML=e[t]});var sliderTurbuBase=document.getElementById("slider-turbulence-base");noUiSlider.create(sliderTurbuBase,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderTurbuBase.noUiSlider.on("change",function(){var e=sliderTurbuBase.noUiSlider.get(),t=sliderTurbuNum.noUiSlider.get(),n=sliderCompoK1.noUiSlider.get(),i=sliderCompoK2.noUiSlider.get(),l=sliderCompoK3.noUiSlider.get(),r=sliderCompoK4.noUiSlider.get(),a=document.getElementById("turbulence-value"),d=document.getElementById("panel-code-turbulence");a.setAttributeNS(null,"baseFrequency",e),$(d).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="'+e+'" numOctaves="'+t+'" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="'+n+'" k2="'+i+'" k3="'+l+'" k4="'+r+'"/>\n</filter>')});var stepSliderValueElementTurbuBase=document.getElementById("slider-turbulence-base-value");sliderTurbuBase.noUiSlider.on("update",function(e,t){stepSliderValueElementTurbuBase.innerHTML=e[t]});var sliderTurbuNum=document.getElementById("slider-turbulence-num");noUiSlider.create(sliderTurbuNum,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderTurbuNum.noUiSlider.on("change",function(){var e=sliderTurbuBase.noUiSlider.get(),t=sliderTurbuNum.noUiSlider.get(),n=sliderCompoK1.noUiSlider.get(),i=sliderCompoK2.noUiSlider.get(),l=sliderCompoK3.noUiSlider.get(),r=sliderCompoK4.noUiSlider.get(),a=document.getElementById("turbulence-value"),d=document.getElementById("panel-code-turbulence");a.setAttributeNS(null,"numOctaves",t),$(d).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="'+e+'" numOctaves="'+t+'" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="'+n+'" k2="'+i+'" k3="'+l+'" k4="'+r+'"/>\n</filter>')});var stepSliderValueElementTurbuNum=document.getElementById("slider-turbulence-num-value");sliderTurbuNum.noUiSlider.on("update",function(e,t){stepSliderValueElementTurbuNum.innerHTML=e[t]});var sliderCompoK1=document.getElementById("slider-composite-k1");noUiSlider.create(sliderCompoK1,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderCompoK1.noUiSlider.on("change",function(){var e=sliderTurbuBase.noUiSlider.get(),t=sliderTurbuNum.noUiSlider.get(),n=sliderCompoK1.noUiSlider.get(),i=sliderCompoK2.noUiSlider.get(),l=sliderCompoK3.noUiSlider.get(),r=sliderCompoK4.noUiSlider.get(),a=document.getElementById("composite-value"),d=document.getElementById("panel-code-turbulence");a.setAttributeNS(null,"k1",n),$(d).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="'+e+'" numOctaves="'+t+'" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="'+n+'" k2="'+i+'" k3="'+l+'" k4="'+r+'"/>\n</filter>')});var stepSliderValueElementCompoK1=document.getElementById("slider-composite-k1-value");sliderCompoK1.noUiSlider.on("update",function(e,t){stepSliderValueElementCompoK1.innerHTML=e[t]});var sliderCompoK2=document.getElementById("slider-composite-k2");noUiSlider.create(sliderCompoK2,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderCompoK2.noUiSlider.on("change",function(){var e=sliderTurbuBase.noUiSlider.get(),t=sliderTurbuNum.noUiSlider.get(),n=sliderCompoK1.noUiSlider.get(),i=sliderCompoK2.noUiSlider.get(),l=sliderCompoK3.noUiSlider.get(),r=sliderCompoK4.noUiSlider.get(),a=document.getElementById("composite-value"),d=document.getElementById("panel-code-turbulence");a.setAttributeNS(null,"k2",i),$(d).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="'+e+'" numOctaves="'+t+'" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="'+n+'" k2="'+i+'" k3="'+l+'" k4="'+r+'"/>\n</filter>')});var stepSliderValueElementCompoK2=document.getElementById("slider-composite-k2-value");sliderCompoK2.noUiSlider.on("update",function(e,t){stepSliderValueElementCompoK2.innerHTML=e[t]});var sliderCompoK3=document.getElementById("slider-composite-k3");noUiSlider.create(sliderCompoK3,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderCompoK3.noUiSlider.on("change",function(){var e=sliderTurbuBase.noUiSlider.get(),t=sliderTurbuNum.noUiSlider.get(),n=sliderCompoK1.noUiSlider.get(),i=sliderCompoK2.noUiSlider.get(),l=sliderCompoK3.noUiSlider.get(),r=sliderCompoK4.noUiSlider.get(),a=document.getElementById("composite-value"),d=document.getElementById("panel-code-turbulence");a.setAttributeNS(null,"k3",l),$(d).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="'+e+'" numOctaves="'+t+'" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="'+n+'" k2="'+i+'" k3="'+l+'" k4="'+r+'"/>\n</filter>')});var stepSliderValueElementCompoK3=document.getElementById("slider-composite-k3-value");sliderCompoK3.noUiSlider.on("update",function(e,t){stepSliderValueElementCompoK3.innerHTML=e[t]});var sliderCompoK4=document.getElementById("slider-composite-k4");noUiSlider.create(sliderCompoK4,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderCompoK4.noUiSlider.on("change",function(){var e=sliderTurbuBase.noUiSlider.get(),t=sliderTurbuNum.noUiSlider.get(),n=sliderCompoK1.noUiSlider.get(),i=sliderCompoK2.noUiSlider.get(),l=sliderCompoK3.noUiSlider.get(),r=sliderCompoK4.noUiSlider.get(),a=document.getElementById("composite-value"),d=document.getElementById("panel-code-turbulence");a.setAttributeNS(null,"k3",r),$(d).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="'+e+'" numOctaves="'+t+'" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="'+n+'" k2="'+i+'" k3="'+l+'" k4="'+r+'"/>\n</filter>')});var stepSliderValueElementCompoK4=document.getElementById("slider-composite-k4-value");sliderCompoK4.noUiSlider.on("update",function(e,t){stepSliderValueElementCompoK4.innerHTML=e[t]});var sliderFeLineRs=document.getElementById("slider-linear-rs");noUiSlider.create(sliderFeLineRs,{start:[.5],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderFeLineRs.noUiSlider.on("change",function(){var e=sliderFeLineRs.noUiSlider.get(),t=sliderFeLineRa.noUiSlider.get(),n=sliderFeLineGs.noUiSlider.get(),i=sliderFeLineGa.noUiSlider.get(),l=sliderFeLineBs.noUiSlider.get(),r=sliderFeLineBa.noUiSlider.get(),a=document.getElementById("r-linear"),d=document.getElementById("panel-code-linear");a.setAttributeNS(null,"slope",e),$(d).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="'+e+'" amplitude="'+t+'"/>\n<feFuncG type="linear" slope="'+n+'" amplitude="'+i+'"/>\n<feFuncB type="linear" slope="'+l+'" amplitude="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementFeLineRs=document.getElementById("slider-linear-rs-value");sliderFeLineRs.noUiSlider.on("update",function(e,t){stepSliderValueElementFeLineRs.innerHTML=e[t]});var sliderFeLineRa=document.getElementById("slider-linear-ra");noUiSlider.create(sliderFeLineRa,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderFeLineRa.noUiSlider.on("change",function(){var e=sliderFeLineRs.noUiSlider.get(),t=sliderFeLineRa.noUiSlider.get(),n=sliderFeLineGs.noUiSlider.get(),i=sliderFeLineGa.noUiSlider.get(),l=sliderFeLineBs.noUiSlider.get(),r=sliderFeLineBa.noUiSlider.get(),a=document.getElementById("r-linear"),d=document.getElementById("panel-code-linear");a.setAttributeNS(null,"amplitude",t),$(d).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="'+e+'" amplitude="'+t+'"/>\n<feFuncG type="linear" slope="'+n+'" amplitude="'+i+'"/>\n<feFuncB type="linear" slope="'+l+'" amplitude="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementFeLineRa=document.getElementById("slider-linear-ra-value");sliderFeLineRa.noUiSlider.on("update",function(e,t){stepSliderValueElementFeLineRa.innerHTML=e[t]});var sliderFeLineGs=document.getElementById("slider-linear-gs");noUiSlider.create(sliderFeLineGs,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderFeLineGs.noUiSlider.on("change",function(){var e=sliderFeLineRs.noUiSlider.get(),t=sliderFeLineRa.noUiSlider.get(),n=sliderFeLineGs.noUiSlider.get(),i=sliderFeLineGa.noUiSlider.get(),l=sliderFeLineBs.noUiSlider.get(),r=sliderFeLineBa.noUiSlider.get(),a=document.getElementById("g-linear"),d=document.getElementById("panel-code-linear");a.setAttributeNS(null,"slope",n),$(d).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="'+e+'" amplitude="'+t+'"/>\n<feFuncG type="linear" slope="'+n+'" amplitude="'+i+'"/>\n<feFuncB type="linear" slope="'+l+'" amplitude="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementFeLineGs=document.getElementById("slider-linear-gs-value");sliderFeLineGs.noUiSlider.on("update",function(e,t){stepSliderValueElementFeLineGs.innerHTML=e[t]});var sliderFeLineGa=document.getElementById("slider-linear-ga");noUiSlider.create(sliderFeLineGa,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderFeLineGa.noUiSlider.on("change",function(){var e=sliderFeLineRs.noUiSlider.get(),t=sliderFeLineRa.noUiSlider.get(),n=sliderFeLineGs.noUiSlider.get(),i=sliderFeLineGa.noUiSlider.get(),l=sliderFeLineBs.noUiSlider.get(),r=sliderFeLineBa.noUiSlider.get(),a=document.getElementById("g-linear"),d=document.getElementById("panel-code-linear");a.setAttributeNS(null,"slope",i),$(d).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="'+e+'" amplitude="'+t+'"/>\n<feFuncG type="linear" slope="'+n+'" amplitude="'+i+'"/>\n<feFuncB type="linear" slope="'+l+'" amplitude="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementFeLineGa=document.getElementById("slider-linear-ga-value");sliderFeLineGa.noUiSlider.on("update",function(e,t){stepSliderValueElementFeLineGa.innerHTML=e[t]});var sliderFeLineBs=document.getElementById("slider-linear-bs");noUiSlider.create(sliderFeLineBs,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderFeLineBs.noUiSlider.on("change",function(){var e=sliderFeLineRs.noUiSlider.get(),t=sliderFeLineRa.noUiSlider.get(),n=sliderFeLineGs.noUiSlider.get(),i=sliderFeLineGa.noUiSlider.get(),l=sliderFeLineBs.noUiSlider.get(),r=sliderFeLineBa.noUiSlider.get(),a=document.getElementById("b-linear"),d=document.getElementById("panel-code-linear");a.setAttributeNS(null,"slope",l),$(d).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="'+e+'" amplitude="'+t+'"/>\n<feFuncG type="linear" slope="'+n+'" amplitude="'+i+'"/>\n<feFuncB type="linear" slope="'+l+'" amplitude="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementFeLineBs=document.getElementById("slider-linear-bs-value");sliderFeLineBs.noUiSlider.on("update",function(e,t){stepSliderValueElementFeLineBs.innerHTML=e[t]});var sliderFeLineBa=document.getElementById("slider-linear-ba");noUiSlider.create(sliderFeLineBa,{start:[0],step:.01,range:{min:[0],max:[1]},pips:{mode:"values",values:[0,1],density:10}}),sliderFeLineBa.noUiSlider.on("change",function(){var e=sliderFeLineRs.noUiSlider.get(),t=sliderFeLineRa.noUiSlider.get(),n=sliderFeLineGs.noUiSlider.get(),i=sliderFeLineGa.noUiSlider.get(),l=sliderFeLineBs.noUiSlider.get(),r=sliderFeLineBa.noUiSlider.get(),a=document.getElementById("b-linear"),d=document.getElementById("panel-code-linear");a.setAttributeNS(null,"amplitude",r),$(d).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="'+e+'" amplitude="'+t+'"/>\n<feFuncG type="linear" slope="'+n+'" amplitude="'+i+'"/>\n<feFuncB type="linear" slope="'+l+'" amplitude="'+r+'"/>\n</feComponentTransfer>\n</filter>')});var stepSliderValueElementFeLineBa=document.getElementById("slider-linear-ba-value");sliderFeLineBa.noUiSlider.on("update",function(e,t){stepSliderValueElementFeLineBa.innerHTML=e[t]});