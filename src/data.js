export const event = {
  names: {
    bride: "Aparecida",
    groom: "Antônio",
    display: "Antônio & Cida",
    monogram: "A · A",
  },
  marriedDate: "8 de janeiro de 1977",
  years: 50,
  title: "Bodas de Ouro",
  dateISO: "2027-01-10T10:00:00",
  fullDate: "Domingo, 10 de janeiro de 2027",
  time: "10h00",
  location: "Clube de Festas",
  address: "Local a ser confirmado",
  dressCode: "Traje a vontade",
  whatsapp: "5518997770614",
  phoneDisplay: "+55 (18) 99777-0614",
  mapLink: "https://maps.google.com/?q=Av.+das+Flores+1234+Sao+Paulo",
  // Mostrar o cartão "Ver como chegar no mapa" na seção de confirmação?
  //   true  -> aparece
  //   false -> escondido (o endereço continua no campo `address`, e o
  //            link segue guardado em `mapLink` para quando quiser religar)
  showMap: false,
  // Foto do casal. Com `null` o quadro mostra o monograma "A · A".
  //
  // Opção 1 — arquivo em public/ (mais simples):
  //   salve como public/foto-casal.jpg e use  photo: "/foto-casal.jpg"
  //
  // Opção 2 — arquivo em src/assets/ (a Vite otimiza e versiona o arquivo):
  //   import fotoCasal from "./assets/foto-casal.jpg";   // no topo deste arquivo
  //   photo: fotoCasal,
  //
  // O quadro é retrato (proporção 3:3.6) e a imagem entra com
  // `object-fit: cover`, ou seja, é recortada pelo centro. Fotos em pé
  // (3:4 ou 2:3) aproveitam o enquadramento muito melhor que as deitadas.
  photo: "/foto-casal.jpeg",
  message: [
    "Há mais de meio século, uma história de amor começou a ser escrita. Cinquenta invernos, cinquenta primaveras, sempre de mãos dadas — o amor que plantamos cresceu, floresceu e hoje celebra o Jubileu de Ouro.",
    "Cada sorriso, cada cumplicidade e cada lembrança ganham ainda mais sentido quando compartilhados com quem amamos. Por isso, Antônio e Aparecida têm a honra de convidar você para celebrar 50 anos de casados.",
    "Sua presença completa esta festa de meio século de companheirismo, alegrias e muito amor.",
  ],
  signature: "Com todo o carinho",
};

export const palette = ["#c9a227", "#e3c767", "#f3e9c8", "#a67c00", "#fffaf0", "#d4af37"];