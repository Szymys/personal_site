# 🚀 Szymys Personal Site

## 🌐 Live Demo  
🔗 [https://szymys.pl](https://szymys.pl)

**Personal website** zbudowana w **Astro**, zoptymalizowana pod szybkie ładowanie, responsywność i nowoczesny frontend.  
Hostowana na własnym VPS, konteneryzowana za pomocą Dockera i serwowana przez Nginx z HTTPS.

![Screenshot - Homepage](https://raw.githubusercontent.com/Szymys/personal_site/main/public/preview.png)

---

## 🔧 Stack

- **Frontend**: Astro (Static Site Generator), JavaScript, HTML, CSS  
- **Build system**: npm, Astro CLI  
- **Containerization**: Docker  
- **Web Server**: Nginx (HTTPS z Certbot)  
- **Hosting**: VPS Ubuntu 22.04 (Contabo)  

---

## ✨ Funkcje

- ⚡ Szybka i lekka strona statyczna  
- 📱 Responsywny design działający na każdym urządzeniu  
- 📝 Prezentacja moich projektów, umiejętności i kontaktu  
- 🐳 Uruchomiona w kontenerze Docker dla łatwej deploymentu  
- 🔐 Bezpieczna (HTTPS) dzięki Certbot i Nginx  
- 🔗 Linki do repozytoriów i social media  

---

## ⚙️ Jak uruchomić lokalnie (dev)

```bash
# 1. Sklonuj repozytorium
git clone https://github.com/Szymys/personal_site.git
cd personal_site

# 2. Zainstaluj zależności
npm install

# 3. Uruchom tryb developerski z hot-reloadem na porcie 3000
npm run dev

# 4. Otwórz http://localhost:3000 w przeglądarce
