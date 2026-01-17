
import { Project, Leadership, Achievement, Certificate, CreativeExperience as CreativeExperienceType, AboutItem } from './types';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const aboutFocus: AboutItem[] = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        title: "Pengembangan Web Frontend",
        description: "Menciptakan antarmuka pengguna yang responsif, intuitif, dan menarik dengan teknologi modern."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 12h-15M6.5 5.5l-4 4 4 4M12.5 18.5l4-4-4-4"/></svg>`,
        title: "Integrasi IoT & Web",
        description: "Menghubungkan perangkat fisik ke dashboard web untuk monitoring dan kontrol data secara real-time."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" a="1.1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
        title: "Aplikasi Web Backend",
        description: "Membangun aplikasi server-side yang tangguh menggunakan Python (Flask) dan PHP (Laravel)."
    }
];

export const aboutActivities: AboutItem[] = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`,
        title: "Proyek IT Kolaboratif",
        description: "Terlibat aktif dalam berbagai proyek pengembangan perangkat lunak dalam sebuah tim."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        title: "Kompetisi Tingkat Nasional",
        description: "Menguji dan membuktikan kemampuan dalam berbagai kompetisi teknologi bergengsi."
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        title: "Kepemimpinan & Organisasi",
        description: "Mengasah soft skills melalui peran aktif di OSIS, terutama di bidang TIK."
    }
];


export const skills = {
  frontend: {
    title: 'Frontend Development',
    items: ['HTML, CSS, JavaScript', 'React', 'Responsive Design', 'Tailwind CSS'],
  },
  backend: {
    title: 'Backend & Web App',
    items: ['Python', 'Flask', 'Laravel', 'Authentication & CRUD'],
  },
  iot: {
    title: 'IoT Development',
    items: ['ESP32', 'Sensor Ultrasonic & Load Cell', 'Monitoring dashboard web', 'Simulasi Wokwi'],
  },
  creative: {
    title: 'Creative & Media',
    items: ['Videography', 'Photography', 'Video Editing', 'Copywriting', 'Graphic Design'],
  },
  soft: {
    title: 'Soft Skills',
    items: ['Leadership', 'Teamwork', 'Problem Solving', 'Time Management', 'Critical Thinking', 'Adaptability'],
  },
};

export const featuredProjects: Project[] = [
  {
    title: 'SmartNote — SIC Frontend Web',
    description: 'Frontend website pencatatan pintar (SIC Top 20)',
    imageUrl: 'smartnote.jpeg',
    techStack: ['HTML', 'CSS', 'JS', 'Python + Flask','SQLAlchemy (ORM)','GEMINI API'],
    fullDescription: 'SmartNote adalah aplikasi web frontend yang dirancang untuk membantu siswa mencatat dan mengatur materi pelajaran secara efisien. Proyek ini berhasil masuk Top 20 dalam Student Innovation Challenge (SIC) dan menonjolkan desain antarmuka yang bersih dan fungsionalitas yang responsif.',
    repoUrl: 'https://github.com/nabilfzn/Smartnote_ThePrenjaks.git',
  },
  {
    title: 'ULANGIN — Sustainable Fashion Marketplace',
    description: 'Website marketplace fashion berbasis rework',
    imageUrl: 'ulangin.png',
    techStack: ['Laravel', 'Tailwind', 'Blade', 'MySQL'],
    fullDescription: 'ULANGIN adalah sebuah platform marketplace yang didedikasikan untuk fashion berkelanjutan dengan konsep rework. Website ini memungkinkan pengguna untuk membeli dan menjual produk fashion daur ulang, mempromosikan ekonomi sirkular di industri mode.',
    repoUrl: 'https://github.com/arga1212/ULANGIN.git',
  },
  {
    title: 'Asistio — Sistem Peminjaman Digital',
    description: 'Web app peminjaman barang & ruangan berbasis Flask',
    imageUrl: 'asist.png',
    techStack: ['HTML', 'CSS', 'SQLlite', 'Flask','Gemini API'],
    fullDescription: 'Webapp yang dibangun menggunakan Flask untuk mendigitalkan proses peminjaman barang dan ruangan di lingkungan sekolah dengan di bantu AI agar peminjaman lebih efisien. Sistem ini mencakup fitur autentikasi pengguna, manajemen item, dan penjadwalan peminjaman secara real-time.',
    repoUrl: '#',
  },
  {
    title: 'Chilli Farm Automation (IoT + React)',
    description: 'Monitoring pertanian cabai otomatis berbasis IoT & AI',
    imageUrl: 'cili.png',
    techStack: ['React', 'IoT', 'Flask', 'MQTT', 'GEMINI AI'],
    fullDescription: 'Proyek inovatif yang menggabungkan Internet of Things (IoT) dan AI untuk otomatisasi pertanian cabai. Sistem ini menggunakan sensor untuk memantau kondisi lingkungan dan dashboard React untuk visualisasi data secara real-time, memungkinkan petani untuk mengoptimalkan hasil panen.',
    repoUrl: 'https://github.com/Hzlnutt/ChilliFarm-IoT.git',
  },
  {
    title: 'Marketplace',
    description: 'Website marketplace berbasis Laravel',
    imageUrl: 'argabintang.png',
    techStack: ['Laravel', 'Tailwind', 'MySQL', 'Blade'],
    fullDescription: 'Sebuah website marketplace fungsional yang dibangun dengan framework Laravel. Platform ini mendukung fitur-fitur standar e-commerce seperti manajemen produk, keranjang belanja, dan proses checkout yang aman.',
    repoUrl: 'https://github.com/barastrong/BintangArga',
  },
  {
  title: 'Twibbon LDKS',
    description: 'Website Twibbon untuk acara LDKS 2025 agar para peserta dapat mengunduh dan menggunakan twibbon digital tanpa watermark',
    imageUrl: 'twibbon.png',
    techStack: ['React'],
    fullDescription: 'Website sederhana yang dibuat menggunakan React untuk memudahkan peserta acara LDKS 2025 dalam membuat dan mengunduh twibbon acara secara otomatis tanpa watermark.',
    repoUrl: 'https://github.com/barastrong/BintangArga', // Note: This seems to be the same repo as Marketplace
  },
];

export const otherProjects: Project[] = [
  { name: 'Copywriter Website Jagoan Hosting', imageUrl: 'jagos1.png', description: 'Bertugas sebagai copywriter untuk konten website dalam kompetisi Jagoan Hosting Infra.', liveUrl: 'https://semicolon.smktelkom-sda.sch.id', repoUrl: 'https://github.com/RasyaGtps/Full-Stack-JHIC.git' },
];

export const creativeExperience: CreativeExperienceType[] = [
    {
        title: 'Koordinator Pubdekdok Diesnatalis',
        imageUrl: 'koordekdok.png',
        description: 'Memimpin tim publikasi, dekorasi, dan dokumentasi untuk acara Diesnatalis sekolah.'
    },
    {
        title: 'Editor & PM Videotron Diesnatalis',
        imageUrl: 'videotron.png',
        description: 'Mengelola dan mengedit konten yang ditampilkan pada videotron selama acara Diesnatalis.'
    },
    {
        title: 'Fotografer & Videografer Event',
        imageUrl: 'dekdok.jpeg',
        description: 'Mendokumentasikan berbagai acara sekolah melalui foto dan video profesional.'
    },
    {
        title: 'Tim Live Streaming',
        imageUrl: 'live.jpeg',
        description: 'Bagian dari tim teknis yang menangani siaran langsung acara-acara penting sekolah.'
    },
    {
        title: 'Tim Pubdekdok OSIS',
        imageUrl: 'pddabadi.jpeg',
        description: 'Aktif dalam tim pubdekdok untuk setiap program kerja OSIS, memastikan dokumentasi berkualitas.'
    },
    {
        title: 'Pilot Drone Diesnatalis 6',
        imageUrl: 'drone.jpeg',
        description: 'Mengoperasikan drone untuk pengambilan gambar udara yang sinematik selama acara.'
    },
];

export const leadershipExperience: Leadership[] = [
  {
    role: 'Ketua Divisi TIK OSIS 2025',
    description: 'Memimpin dan mengkoordinasikan semua kegiatan terkait TIK di OSIS.',
    imageUrl: 'kadiv.jpeg',
    fullDescription: 'Sebagai Ketua Divisi TIK, saya bertanggung jawab untuk merencanakan dan mengeksekusi inisiatif teknologi, mengelola tim, serta memastikan semua kebutuhan digital organisasi terpenuhi. Ini termasuk pengelolaan media sosial, pengembangan web internal, dan dukungan teknis untuk acara.',
  },
  {
    role: 'Divisi TIK OSIS 2024',
    description: 'Berkontribusi aktif dalam proyek dan tugas divisi TIK.',
    imageUrl: 'tik.jpeg',
    fullDescription: 'Sebagai anggota divisi TIK, saya terlibat langsung dalam berbagai proyek teknis, mulai dari pembuatan konten digital, pemeliharaan website sekolah, hingga membantu dalam pelaksanaan acara yang membutuhkan dukungan teknologi.',
  },
  {
    role: 'Ketua Pelaksana acara 17 Agustus 2024',
    description: 'Bertanggung jawab atas keseluruhan pelaksanaan acara peringatan 17 Agustus.',
    imageUrl: 'ketupel.jpeg',
    fullDescription: 'Dalam peran ini, saya bertugas untuk mengabadikan momen-momen penting melalui fotografi dan videografi di berbagai acara OSIS. Hasil dokumentasi kemudian diolah untuk publikasi di media sosial dan arsip sekolah.',
  },
  {
    role: 'Pemateri SKOMDATE',
    description: 'Berbagi pengetahuan tentang pembuatan konten digital kepada siswa SMP.',
    imageUrl: 'skomdate.png',
    fullDescription: 'Saya mendapat kesempatan untuk menjadi pemateri dalam acara SKOMDATE, di mana saya membagikan materi tentang dasar-dasar dan strategi efektif dalam membuat konten digital yang menarik bagi audiens muda.',
  }
];

export const achievements: Achievement[] = [
  { name: 'Juara 1 Jagoan Hosting Infra Competition', imageUrl: 'jagos1.jpeg', description: 'Meraih juara pertama sebagai copywriter dalam tim, berkontribusi pada pembuatan konten teknis yang persuasif dan informatif.' },
  { name: 'Top 20 Student Innovation Challenge (SIC)', imageUrl: 'sic.png', description: 'Proyek SmartNote yang saya dan tim kembangkan berhasil masuk dalam 20 besar dari ratusan peserta di kompetisi inovasi siswa tingkat nasional.' },
  { name: 'Finalis FIKSI 2025', imageUrl: 'fiksi.jpeg', description: 'Berhasil membawa ide bisnis saya ke babak final Festival Inovasi dan Kewirausahaan Siswa Indonesia (FIKSI), menunjukkan kemampuan dalam pengembangan produk dari ide hingga prototipe.' },
];

export const certificates: Certificate[] = [
  { name: 'DIGIUP Graphic Design', imageUrl: 'digiup.jpeg', description: 'Sertifikat partisipasi dan kontribusi dalam program DIGIUP Graphic Design.' },
  { name: 'BNSP Graphic Design', imageUrl: 'bnsp.png', description: 'Sertifikat Resmi kompetensi dalam bidang Graphic Design.' },
  { name: 'Samsung Innovation Campus', imageUrl: 'sertif sic.png', description: 'Sertifikat sebagai finalis Top 20 dalam Student Innovation Challenge.' },
  { name: 'Fiksi(Festival Inovasi dan Kewirausahaan Siswa Indonesia)', imageUrl: 'sertif fiksi.png', description: 'Sertifikat sebagai finalis dalam Festival Inovasi dan Kewirausahaan Siswa Indonesia.' },
  { name: 'Jagoan Hosting Infra Competition', imageUrl: 'sertif jagos.png', description: 'Sertifikat sebagai pemenang pertama dalam kompetisi infrastruktur yang diselenggarakan oleh Jagoan Hosting.' },
  { name: 'SNA Official Broadcaster', imageUrl: 'sertif sna.png', description: 'Sertifikat sebagai official broadcaster dalam kompetisi basket tingkat jawa timur' },

];

export const stats = [
    { value: '15+', label: 'Web & IT Projects' },
    { value: '5+', label: 'Project Deployments' },
    { value: '10+', label: 'Event Documentations' },
    { value: '3+', label: 'Operator & Technical Roles' },
];

export const contactInfo = {
    email: 'arga.laptop1202@gmail.com',
    socials: {
        github: 'https://github.com/arga1212',
        linkedin: 'https://www.linkedin.com/in/muhammad-arga-skomda2025/',
        instagram: 'https://www.instagram.com/argaakbr/',
    }
}
