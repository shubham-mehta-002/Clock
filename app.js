var h = document.querySelector(".hours");
var m = document.querySelector(".minutes");
var s = document.querySelector(".seconds");
function reload()
{
    var d = new Date();
    let h_val = d.getHours();
    let m_val = d.getMinutes();
    let s_val = d.getSeconds();
    let h_angle = (h_val % 12)*30 + (m_val)*0.5;
    h.style.transform= `rotate(${h_angle}deg)`
    let m_angle = 6*m_val;
    m.style.transform= `rotate(${m_angle}deg)`
    let s_angle = 6*s_val;
    s.style.transform= `rotate(${s_angle}deg)`
}
setInterval(reload, 1000);

