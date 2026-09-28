const pages = {
  home: {
    breadcrumb: "Anasayfa",
    title: "AİLE PLANLAMASI BİLGİ PORTALI",
    desc: "KTO Karatay Üniversitesi Sağlık Bilimleri Fakültesi Ebelik Bölümü Projesi",
    content: `
      <div class="card">
        <h2>Hoş Geldiniz</h2>
        <p>Bu platform, aile planlaması yöntemleri, Türkiye'nin güncel demografik yapısı ve toplum sağlığı üzerindeki etkileri hakkında bilimsel veriler sunmak amacıyla hazırlanmıştır.</p>
      </div>
      <div class="grid">
        <div class="stat-box"><span class="stat-value">86 Milyon+</span>31 Aralık 2025 Türkiye Nüfusu</div>
        <div class="stat-box"><span class="stat-value">1,48</span>2024 Toplam Doğurganlık Hızı</div>
        <div class="stat-box"><span class="stat-value">9,0</span>2024 Bebek Ölüm Hızı (Binde)</div>
      </div>
    `
  },

  ap_tanim: {
    breadcrumb: "Anasayfa > Aile Planlaması > Tanım",
    title: "AİLE PLANLAMASI NEDİR?",
    desc: "Bilgi, Eğitim ve Sağlıklı Yarınlar",
    content: `
      <div class="card">
        <img class="page-hero-img" src="./assets/aile_planlamasi.jpeg" alt="Aile Planlaması">
        <h2>Tanım ve Amaç</h2>
        <p>Aile planlaması, bütün çiftlerin ve bireylerin istedikleri sayıda,istedikleri zamanda ve sağlıklı aralıklarla, bakabilecekleri kadar çocuk sahibi olma, sorumluca karar vermeleri ve bu amaçla bilgi, eğitim ve araçlara sahip olmalarıdır.</p>
        <h3>Temel Amaçları:</h3>
        <ul>
          <li>Ailelerin kendi iradeleri ile istedikleri sayıda çocuk sahibi olmalarını sağlamak</li>
          <li>Annenin doğum için en uygun yaşta olmasını sağlamak</li>
          <li>İki gebelik arasında yeterli zaman aralığı olmasını sağlamak</li>
          <li>Bireyleri ve aileleri üreme sağlığı konusunda eğitmek</li>
          <li>Anne ve bebek ölümlerini önlemek ve sağlığını korumak</li>
          <li>Yüksek riskli gebelik ve istenmeyen gebelikleri önlemek</li>
          <li>Çocuk sahibi olmak isteyenlere tıbbî yardım sağlamak</li>
          <li>Bireyleri aile planlaması yöntemleri konusunda eğitmektir</li>
        </ul>
      </div>
    `
  },

  ap_yontemler: {
    breadcrumb: "Anasayfa > Aile Planlaması > Yöntemler",
    title: "MODERN VE GELENEKSEL YÖNTEMLER",
    desc: "Bilimsel Korunma Metotları",
    content: `
      <img class="page-hero-img" src="./assets/korunma_yontemleri.jpeg" alt="Korunma Yöntemleri Tablosu">
      <div class="grid">
      
        <div class="card">
        
          <h3>Modern Yöntemler </h3>
          <ul>
            <li><b>Hormonal:</b> Haplar, iğneler, implantlar, vajinal halka.</li>
            <li><b>Bariyer:</b> Erkek ve kadın kondomu, diyafram, spermisitler.</li>
            <li><b>RİA:</b> Bakırlı ve hormonlu spiraller.</li>
            <li><b>Kalıcı:</b> Tüp ligasyonu ve vazektomi.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Geleneksel Yöntemler </h3>
          <ul>
            <li>Geri çekme (Coitus interruptus)</li>
            <li>Takvim yöntemi</li>
            <li>Emzirme (Laktasyonel Amenore - LAM)</li>
            <li>Bazal vücut ısısı ve servikal mukus yöntemi.</li>
          </ul>
        </div>
      </div>
    `
  },

  ap_faydalari: {
    breadcrumb: "Anasayfa > Aile Planlaması > Faydaları",
    title: "PLANLAMANIN SAĞLIK FAYDALARI",
    desc: "Anne, Bebek ve Toplum Sağlığı",
    content: `
      <div class="grid">
        <div class="card">
          <h3>Anne Sağlığına Faydaları </h3>
          <ul>
            <li>İstenmeyen gebelikleri azaltır</li>
            <li>Riskli yaş grubundaki gebelikleri önler</li>
            <li>Doğum aralıklarını düzenler</li>
            <li>Anne ölümlerini azaltmaya katkı sağlar</li>
            <li>Gebelik koplikasyonlarını düşürür</li>
            <li>Gebe kalma korkusunu ortadan kaldırdığı için sağlıklı bir cinsel yaşam oluşur</li>
            <li>Annenin üreme organlarına dair sağlık sorunlarını da azaltır.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Bebek Sağlığına Faydaları </h3>
          <ul>
            <li>Erken doğum riskini azaltır.</li>
            <li>Düşük doğum ağırlığını azaltır.</li>
            <li>Yenidoğan ölüm oranını düşürür.</li>
            <li>Bebeklere bulaşacak olan hastalıkların geçişini önler.</li>
            <li>Ailenin planlı ve kontrollü çocuk sayısına ulaşmasını destekler.</li>
          </ul>
        </div>
      </div>
 
        </div>
        <div class="card">
          <h3>Toplum Sağlığına Faydaları </h3>
          <ul>
            <li>Riskli yaş grubundaki gebelikleri önler</li>
            <li>Doğum aralıklarını düzenler</li>
            <li>Anne ölümlerini azaltmaya katkı sağlar</li>
            <li>Gebelik koplikasyonlarını düşürür</li>
            <li>Gebe kalma korkusunu ortadan kaldırdığı için sağlıklı bir cinsel yaşam oluşur</li>
            <li>Annenin üreme organlarına dair sağlık sorunlarını da azaltır.</li>
          </ul>
        </div>
    `
  },

  tr_nufus: {
    breadcrumb: "Anasayfa > İstatistik > Nüfus",
    title: "TÜRKİYE NÜFUS YAPISI",
    desc: "2025 Yılı Güncel Verileri",
    content: 
      `
      
      <div class="card">
        <h2>Türkiye Nüfusu </h2>
        <p>31 Aralık 2025 itibarıyla Türkiye nüfusu <b>86.092.168</b> kişi olmuştur.</p>
        <ul>
          <li><b>Erkek Nüfus:</b> 43.059.434 (%50,02)</li>
          <li><b>Kadın Nüfus:</b> 43.032.734 (%49,98)</li>
          <li><b>İlk Evlenme Yaşı (2024):</b> Erkeklerde 28,3, kadınlarda 25,8 olmuştur.</li>
        </ul>
      </div>
    `
  },

  tr_tdh: {
    breadcrumb: "Anasayfa > İstatistik > TDH",
    title: "TOPLAM DOĞURGANLIK HIZI",
    desc: "Doğurganlık Trendleri (2001-2024)",
    content: `
      <img class="page-hero-img" src="./assets/istatistik.jpeg" alt="Doğurganlık Hızı(TDH)">
      <div class="card">
        <h2>TDH Verileri </h2>
        <p>2001 yılında 2,38 olan doğurganlık hızı, 2024 yılında <b>1,48</b>'e gerileyerek nüfus yenilenme eşiği olan 2,10'un altında kalmıştır.</p>
        <h3>İl Bazlı Veriler (2024):</h3>
        <ul>
          <li><b>En Yüksek İl:</b> Şanlıurfa (3,28)</li>
          <li><b>En Düşük İller:</b> Bartın ve Eskişehir (1,12)</li>
        </ul>
      </div>
    `
  },

  tr_olum_oranlari: {
    breadcrumb: "Anasayfa > İstatistik > Ölüm Oranları",
    title: "BEBEK VE ANNE ÖLÜM HIZLARI",
    desc: "Sağlık Hizmetleri Kalite Göstergeleri",
    content: `
      <div class="grid">
        <div class="card">
          <h3>Bebek Ölüm Hızı (2024) </h3>
          <p>Binde <b>9,0</b> olarak gerçekleşmiştir. (2023 yılında 10,1 idi).</p>
        </div>
        <div class="card">
          <h3>Anne Ölüm Oranı (2024) </h3>
          <p>Yüz bin canlı doğumda <b>11,5</b>'e düşmüştür. (2005 yılında 28,5 idi).</p>
        </div>
      </div>
    `
  },

  ap_ebenin_rolleri: {
    breadcrumb: "Anasayfa > Aile Planlaması > Ebenin Rolleri",
    title: "DANIŞMANLIKTA EBENİN ROLLERİ",
    desc: "Rehberlik ve Eğitim Süreçleri",
    content: `
      <div class="card">
        <h3>Ebenin Temel Görevleri:</h3>
        <ul>
          <li>Bireyin kendi kararını özgürce vermesi için rehberlik etmek.</li>
          <li>Anne ve bebeğin haklarını korur.</li>
          <li>Duygusal ve psikolojik destek sağlar.</li>
          <li>Empatik, açık ve etkili iletişim kurmak.</li>
          <li>Mahremiyete ve gizlilik ilkesine uyar.</li>
          <li>Olası riskleri erken dönemde fark eder.</li>
          <li>Gerektiğinde uygun sağlık kuruluşuna yönlendirir.</li>
        </ul>
              </div>
    `
  },

  contact: {
    breadcrumb: "Anasayfa > İletişim",
    title: "İLETİŞİM",
    desc: "Bana Ulaşın",
    content: `
      <div class="card">
        <h2>İletişim Bilgileri</h2>
        <p><b>Merkez Kampüs: </b> Akabe Mah. Alaaddin Kap Cad. No: 130 42020 Karatay / KONYA | TÜRKİYE</p>
        <p><b>Telefon:</b> 444 12 51</p>
        <p><b>Whatsapp:</b> +90 (549) 551 12 51</p>
        <p><b>Faks:</b> +90 (332) 202 00 44</p>
        <p><b>E-posta:</b> bilgi@karatay.edu.tr</p>
        <p><b>Fakülte:</b> Sağlık Bilimleri Fakültesi</p>
        <p><b>Bölüm:</b> Ebelik</p>
      </div>
    `
  }
};

const breadcrumbEl = document.getElementById("breadcrumb");
const heroTitleEl = document.getElementById("heroTitle");
const heroDescEl = document.getElementById("heroDesc");
const contentEl = document.getElementById("content");

document.getElementById("year").textContent = new Date().getFullYear();

function renderPage(pageKey){
  const page = pages[pageKey] || pages.home;
  breadcrumbEl.textContent = page.breadcrumb;
  heroTitleEl.textContent = page.title;
  heroDescEl.textContent = page.desc || "";
  contentEl.innerHTML = page.content;
  
  // Menü aktifleştirme
  document.querySelectorAll(".nav-link, .dd-item").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(`[data-page="${pageKey}"]`).forEach(el => el.classList.add("active"));
  
  window.location.hash = pageKey;
  window.scrollTo(0, 0);
}

function bindNavClicks(){
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      renderPage(btn.getAttribute("data-page"));
    });
  });
}

bindNavClicks();
const initial = window.location.hash.replace("#", "") || "home";
renderPage(initial);