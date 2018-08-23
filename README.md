#Buat sebuah halaman HTML STATIS dari antarmuka internet-based music streaming service, seperti berikut :
https://cl.ly/quVV -- preview situs jadi secara keseluruhan


##Teknis kebutuhan informasi situs : 

1. Konten situs terbagi dua, antarmuka navigasi dan antarmuka pemutar musik

2. Konten navigasi berada pada sisi kiri situs dengan rasio lebar 20%, sedangkan antarmuka pemutar musik di sebelah kanan
dengan rasio lebar 76%. Sisa rasio layar akan menjadi jarak pemisah antarelemen.

3. Memiliki sebuah indikator lagu yang sedang dimainkan.

4. Memiliki sebuah carousel/slider yang digunakan sebagai pencarian cepat dari genre musik yang tersedia.
	a) Ketika pengguna mengarahkan mouse pada salah satu genre maka efek "opacity" dari gambar akan berubah menjadi "0.9"

4. Memiliki sebuah carousel/slider yang digunakan sebagai pencarian cepat dari beberapa playlist yang disediakan oleh Editor situs.
	a) Ketika pengguna mengarahkan mouse pada salah satu genre maka efek "opacity" dari gambar akan berubah menjadi "0.9"
	b) Ketika pengguna mengarahkan mouse pada salah satu genre maka akan tertampil 3 icon berikut : play, favorite, more options 

5. Baik carousel/slider genre musik dan playlist akan melompati 4 item ketika tanda panah navigasi slider di-klik

6. Jarak antaritem pada carousel/slider genre adalah 40px

6. Jarak antaritem pada carousel/slider playlist adalah 20px

7. Baik carousel/slider genre musik dan playlist akan menampilkan :
	a) 4 item ketika ukuran layar memiliki ukuran minimal 769px
	b) 3 item ketika ukuran layar memiliki ukuran dibawah 768px
	c) 1 item ketika ukuran layar memiliki ukuran dibawah 767px


##Teknis kebutuhan teknikal situs :

1. HTML
2. CSS atau LESS atau SCSS (pilih salah satu)
3. jQuery Core Library (https://code.jquery.com/)
4. Owl Slider (https://owlcarousel2.github.io/OwlCarousel2/index.html)
5. Google Font : Roboto (400,500) , Open Sans(300, 400, 600)
6. Icon, SVG akan disediakan secara default


##Responsive Preview beserta elemen-elemen terkait : 

[640px and below]
https://cl.ly/qtnr

[768px]
https://cl.ly/qt6Q

[1024px]
https://cl.ly/quLJ

[desktop]
https://cl.ly/qtiG