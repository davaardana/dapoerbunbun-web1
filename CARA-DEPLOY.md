# Panduan Deploy Website Dapoer Bun-Bun

## ✅ Status: Code Sudah di GitHub!

Repository: https://github.com/davaardana/dapoerbunbun-web1

## 🚀 Cara Deploy Online (Pilih Salah Satu)

### OPSI 1: Vercel (PALING MUDAH & GRATIS) ⭐ RECOMMENDED

1. **Buka Browser**
   - Pergi ke: https://vercel.com/signup
   - Klik "Continue with GitHub"
   - Login dengan akun GitHub Anda

2. **Import Project**
   - Setelah login, klik "Add New..." → "Project"
   - Pilih repository: `dapoerbunbun-web1`
   - Klik "Import"

3. **Deploy**
   - Framework Preset: Next.js (terdeteksi otomatis)
   - Klik "Deploy"
   - Tunggu 2-3 menit

4. **Selesai!**
   - Website akan live di: `https://dapoerbunbun-web1.vercel.app`
   - Atau domain custom seperti: `https://dapoerbunbun.vercel.app`

**Keuntungan Vercel:**
- ✅ Domain gratis (*.vercel.app)
- ✅ SSL/HTTPS otomatis
- ✅ CDN global (cepat di seluruh dunia)
- ✅ Auto-deploy setiap kali push ke GitHub
- ✅ Tidak perlu bayar

---

### OPSI 2: Netlify (Alternatif)

1. Buka: https://netlify.com/signup
2. Login dengan GitHub
3. "Add new site" → "Import an existing project"
4. Pilih GitHub → pilih `dapoerbunbun-web1`
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

---

### OPSI 3: GitHub Pages (Untuk Static Export)

Perlu setup tambahan karena Next.js perlu server. Gunakan Vercel atau Netlify lebih baik.

---

## 🌐 Custom Domain (Opsional)

Setelah deploy di Vercel/Netlify, Anda bisa tambahkan domain sendiri:

1. **Beli Domain** (pilih salah satu):
   - Niagahoster.co.id (~Rp 100.000/tahun untuk .com)
   - Rumahweb.com
   - GoDaddy.com
   - Namecheap.com

2. **Hubungkan ke Vercel**:
   - Di Vercel Dashboard → Settings → Domains
   - Tambahkan domain Anda (contoh: dapoerbunbun.com)
   - Vercel akan kasih instruksi DNS records
   - Update DNS di tempat beli domain
   - Tunggu 1-24 jam untuk propagasi

3. **Domain Siap!**
   - Website bisa diakses di: `https://dapoerbunbun.com`

---

## 📱 Akses Website

Setelah deploy, website bisa diakses:
- **Vercel**: https://dapoerbunbun-web1.vercel.app
- **Custom domain** (jika sudah setup): https://yourdomain.com

---

## 🔄 Update Website

Untuk update konten/gambar:

```bash
# 1. Edit file yang mau diubah
# 2. Commit dan push
git add .
git commit -m "Update content"
git push
```

Website akan otomatis update di Vercel dalam 2-3 menit!

---

## 📞 Butuh Bantuan?

1. Baca dokumentasi Vercel: https://vercel.com/docs
2. Video tutorial Vercel: Search "Cara deploy Next.js di Vercel" di YouTube
3. Support Vercel: https://vercel.com/support

---

## ✨ Selamat!

Website Dapoer Bun-Bun sudah siap online! 🎉

Langkah selanjutnya:
1. Deploy di Vercel (5 menit)
2. Share link ke customer
3. (Opsional) Beli dan setup custom domain
