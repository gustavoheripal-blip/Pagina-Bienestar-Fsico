// 1. Menú en celular
document.addEventListener("DOMContentLoaded",()=>{
  const b=document.getElementById("btnMenu"), n=document.getElementById("navMenu");
  if(b&&n) b.addEventListener("click",()=>n.classList.toggle("abierto"));

  // 2. Algoritmo de Paz - Escaneo del sistema
  window.algoritmoPaz=function(estado){
    const r=document.getElementById("resultado");
    if(!r) return;
    r.style.display="block";
    if(estado==="estable"){
      r.innerHTML="<h3>🟢 Estable</h3><p>Estás en calma. Puedes seguir con tu día y cuidar tu bienestar.</p><p><b>Intenta:</b> Respirar profundo, agradecer algo bueno y ayudar a alguien.</p>";
      r.style.background="#D8F3DC";
    } else if(estado==="atencion"){
      r.innerHTML="<h3>🟡 Atención</h3><p>Hay algo que te preocupa o te genera estrés.</p><p><b>Puedes intentar:</b> Hacer una pausa, identificar qué sientes, escribirlo y hablarlo con alguien de confianza.</p>";
      r.style.background="#FEF3C7";
    } else {
      r.innerHTML="<h3>🔴 Necesito apoyo</h3><p>No tienes que pasar por esto solo/a. Habla con tu orientador/a, tutor/a, un familiar de confianza o un profesional de la salud.</p><p><b>Línea de la Vida: 800 911 2000</b> - Gratuita, confidencial, 24 horas.</p>";
      r.style.background="#FEE2E2";
    }
    r.scrollIntoView({behavior:"smooth"});
  };

  // 3. Generador de Mi Ruta de Paz
  window.generarRuta=function(){
    const cuando=document.getElementById("cuando").value;
    const siento=document.getElementById("siento").value;
    const hare=document.getElementById("hare").value;
    const salida=document.getElementById("miRutaFinal");
    if(!cuando||!siento||!hare){alert("Completa los 3 campos para generar tu ruta");return;}
    salida.innerHTML=`<div class="caja verde"><h3>🌿 Mi Ruta de Paz</h3><p><b>Cuando ocurra:</b> ${cuando}</p><p><b>En lugar de reaccionar impulsivamente, intentaré:</b> ${siento}</p><p><b>Porque esto ayudará a mi bienestar y al de las personas que me rodean:</b> ${hare}</p></div>`;
    salida.classList.remove("oculto");
  };
});