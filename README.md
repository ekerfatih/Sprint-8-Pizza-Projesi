Video Anlatım : https://www.loom.com/share/a52bebf924ad43e1b5455b77b999bf16


# Pizza Projesi

Workintech frontend eğitim sürecindeki challenge'lardan biri olan pizza projesinde, Figma tasarımına uygun bir web sitesi geliştirdim. Veri yönetimini, parent component'ta bir obje olarak tuttum ve useForm hook’u kullanmadan ilerledim. Hataları ve form verilerini bir obje şeklinde state içerisinde saklayarak, prop drilling yöntemiyle ilgili component’lere aktardım.

Form submit edildiğinde, fake bir API servisine POST isteği gönderdim ve dönen cevaptaki oluşturulma zamanını sipariş zamanı olarak belirledim. Bildirimler için react-toastify kütüphanesini kullandım. Ayrıca, proje gereği router kütüphanesi kullanmadığımız için, sayfa yönlendirmelerini useState tabanlı kendi router sistemimi oluşturarak yönettim. Pizzanın iptal edilmesi gibi senaryoları da projeye dahil ettim.

Tasarımı ve form mantığını tamamladıktan sonra, Cypress kullanarak proje için testler yazdım. Responsive tasarımı sağlamak için media query'ler ile flexbox ve grid yapısını efektif şekilde kullandım ve mobil uyumluluğu sağladım. Custom checkbox tasarlayarak görsel olarak da projeye katkı sağladım. Kodlarımı yazarken yeniden kullanılabilir (reusable) olmalarına özen gösterdim ve UX açısından kullanıcıyı doğru şekilde yönlendiren akışlar oluşturdum.

# Websitesi Görselleri


## Ana Sayfa
![Ekran görüntüsü 2025-06-26 180508](https://github.com/user-attachments/assets/fe38cef3-cd56-4244-a211-0553bffecea9)
## Menüler
![Ekran görüntüsü 2025-06-26 180519](https://github.com/user-attachments/assets/006e829f-8888-4231-aa72-d74e6023276b)
## Pizzalar ve Footer
![Ekran görüntüsü 2025-06-26 180529](https://github.com/user-attachments/assets/d3f235dd-cf8c-4799-a2e0-3498758847fb)
## Mobil Görünüm
![Ekran görüntüsü 2025-06-26 180623](https://github.com/user-attachments/assets/60188870-3a3c-4ac0-85ae-36f30554346a)
![Ekran görüntüsü 2025-06-26 180630](https://github.com/user-attachments/assets/95e980b3-3462-4ad7-af6d-1c5caab742bb)
## Sipariş Sayfası
![Ekran görüntüsü 2025-06-26 180643](https://github.com/user-attachments/assets/ba136e04-7386-41c3-acb3-f43508337841)
![Ekran görüntüsü 2025-06-26 180652](https://github.com/user-attachments/assets/b53cf8f3-4ab2-4ada-9f60-b430afc1baf5)
![Ekran görüntüsü 2025-06-26 180702](https://github.com/user-attachments/assets/cec5a3bb-d4f9-4918-89c6-cbbb8de9ac96)
![Ekran görüntüsü 2025-06-26 180717](https://github.com/user-attachments/assets/4180181d-958d-4bba-8c0f-444b64dda212)
## Sipariş Hesaplaması
![Ekran görüntüsü 2025-06-26 180708](https://github.com/user-attachments/assets/e6166500-e313-4b09-945d-2f9fa3446fe4)
## Sipariş Onay Sayfası
![Ekran görüntüsü 2025-06-26 180726](https://github.com/user-attachments/assets/41028a5d-1efa-49ee-a054-c085204da3b9)

