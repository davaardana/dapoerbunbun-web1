# Dapoer Bun-Bun - Deployment Guide

## 🚀 Deploy ke Vercel (GRATIS & MUDAH)

Website ini sudah siap di-deploy ke Vercel untuk mendapatkan domain online gratis!

### Langkah Deploy (5 Menit):

1. **Buka Vercel**
   - Kunjungi: https://vercel.com
   - Klik "Sign Up" atau "Log In"
   - Pilih "Continue with GitHub"

2. **Import Repository**
   - Klik "Add New Project"
   - Pilih "Import Git Repository"
   - Cari dan pilih: `davaardana/dapoerbunbun-web1`
   - Klik "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (sudah terdeteksi otomatis)
   - Root Directory: `.` (default)
   - Build Command: `npm run build` (sudah otomatis)
   - Output Directory: `.next` (sudah otomatis)
   - Install Command: `npm install` (sudah otomatis)

4. **Deploy!**
   - Klik "Deploy"
   - Tunggu 2-3 menit
   - Website akan live di: `https://dapoerbunbun-web1.vercel.app`

### 🌐 Custom Domain (Opsional)

Setelah deploy, Anda bisa tambahkan custom domain:
1. Beli domain di Niagahoster, Rumahweb, atau domain.com
2. Di Vercel dashboard, pilih project → Settings → Domains
3. Tambahkan domain Anda
4. Update DNS records sesuai instruksi Vercel

### 📱 Fitur Vercel:
- ✅ **Domain gratis**: `*.vercel.app`
- ✅ **SSL/HTTPS otomatis**
- ✅ **Auto deployment** - setiap push ke GitHub akan auto deploy
- ✅ **Preview deployments** - setiap PR dapat preview
- ✅ **Analytics gratis**
- ✅ **CDN global**

### 🔄 Update Website

Setelah deployment, untuk update website:
```bash
# Edit file yang ingin diubah
git add .
git commit -m "Update website"
git push
```

Vercel akan otomatis deploy versi terbaru!

### 📞 Support
Jika ada masalah, kontak Vercel support atau lihat dokumentasi:
- https://vercel.com/docs

---

**Website URL setelah deploy**: 
- Production: `https://dapoerbunbun-web1.vercel.app`
- atau custom domain Anda

Semoga sukses! 🎉
