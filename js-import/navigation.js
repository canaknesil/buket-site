is_ana_sayfa_active = "";
is_hakkimda_active = "";
is_iletisim_active = "";

switch(active_link_for_nav) {
case "ana_sayfa":
    is_ana_sayfa_active = "active";
    break;
case "hakkimda":
    is_hakkimda_active = "active";
    break;
case "iletisim":
    is_iletisim_active = "active";
    break;
default:
    
} 

document.write(`
<!-- Navigation -->
<nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="/">Buket Özensoy<br><div style="font-size:60%;">Klinik Psikolog</div></a>
    <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menü
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-2 px-0 px-lg-3 rounded ${is_ana_sayfa_active}" href="/">Ana Sayfa</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-2 px-0 px-lg-3 rounded ${is_hakkimda_active}" href="/hakkimda">Hakkımda</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-2 px-0 px-lg-3 rounded ${is_iletisim_active}" href="/iletisim">İletişim</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`);
