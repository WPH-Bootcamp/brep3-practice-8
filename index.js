class Car {
  // 1. Encapsulasi - atribut
  brand = null;
  model = null;
  year = null;
  owner = null;

  constructor(brand, model, year, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }

  // Methods
  running() {
    console.log("The car is running");
  }

  // getters
  getBrand() {
    return this.brand;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  getOwner() {
    return this.owner;
  }

  // Setters
  setOwner(owner) {
    this.owner = owner;
  }
}

const xiaomi = new Car("Xiaomi", "Mi 11", 2021, "Fauzi");
console.log(xiaomi.getOwner());
xiaomi.setOwner("Sena");
console.log(xiaomi.getOwner());

// Definisi Class Abstract
class RancanganRumah {
  // 2. Abstraksi
  getJumlahKamar() {
    throw new Error("Method 'getJumlahKamar()' must be implemented.");
  }

  // 4. Polymorphism
  getLuasBangunan() {
    return 100; // contoh implementasi
  }
}

// Definisi Class Baru
// 3. Inherintance
class RancanganRumahVersi2 extends RancanganRumah {
  getJumlahKamar() {
    return 4;
  }
}

const rumah = new RancanganRumahVersi2();
console.log(rumah.getJumlahKamar());

let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Selesai!"), 1000);
});

// p.then((result) => console.log(result));

async function main() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);   
  }
}

main();
