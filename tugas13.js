console.log("UNSHIFT\n==================================");

const panggilBuah = () => {
  let buah = ["Pisang", "Jeruk"];
  console.log("Nilai awal variabel buah:", buah, "\n");

  buah.unshift("Apel", "Mangga");
  console.log("Nilai variable buah setelah fungsi unshift:", buah);
};

panggilBuah();
