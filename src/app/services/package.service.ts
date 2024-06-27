import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class packegaedatarective{

    package = [
        {
          id: 1,
          title: "Shangri-La Circle Exclusive Member Rate with Breakfast",
          prices: "From LKR 55,472.40 Average Per Night",
          buffet: "Buffet",
          tea: "Tea Buffet",
          spa: "Spa",
          pool: "Pool",
          imageUrl: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/2/0/%7B2207ABC9-F8CD-40A1-B6CB-E6E47DA82618%7De5116a6499d54a95a7851d5443fe08f0.jpg",
          exclusive: "Exclusive Member Rate for Shangri-La Circle member."
        },
        {
          id: 2,
          title: "Luxury Suite with All Amenities",
          prices: "From LKR 70,000.00 Average Per Night",
          buffet: "Luxury Buffet",
          tea: "High Tea",
          spa: "Full Spa Access",
          pool: "Private Pool",
          
          imageUrl: "https://media.istockphoto.com/id/1358210308/photo/top-view-of-smiling-family-of-four-having-fun-and-relaxing-in-indoor-swimming-pool-at-hotel.jpg?s=612x612&w=0&k=20&c=cVlhu_08xLRJhKV7sMY-z1_jKXGDGpDB5QLpnt5vs0s=",
          exclusive: "Access to VIP lounge and exclusive services."
        },
        {
          id: 3,
          title: "Family Fun Package",
          prices: "From LKR 40,000.00 Average Per Night",
          buffet: "Family Buffet",
          tea: "Kids Tea Party",
          spa: "Mini Spa for Kids",
          pool: "Kids Pool",
          imageUrl: "https://th.bing.com/th/id/OIP.WwN9TsKGY8gD4GLPHZL5IAHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
          exclusive: "Special activities and discounts for families."
        },
        {
          id: 4,
          title: "Romantic Getaway",
          prices: "From LKR 60,000.00 Average Per Night",
          buffet: "Candlelit Buffet",
          tea: "Romantic Tea for Two",
          spa: "Couple's Spa Session",
          pool: "Infinity Pool",
          imageUrl: "https://img.freepik.com/free-photo/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes_1157-51941.jpg",
          exclusive: "Romantic decor and complimentary wine."
        },
        {
          id: 5,
          title: "Adventure Package",
          prices: "From LKR 45,000.00 Average Per Night",
          buffet: "Adventure Buffet",
          tea: "Energy Tea",
          spa: "Adventure Spa",
          pool: "Outdoor Pool",
          imageUrl: "https://cdn.outsideonline.com/wp-content/uploads/2023/11/Japan_JNTO_h.jpg",
          exclusive: "Guided outdoor activities and excursions."
        }, {
            id: 6,
            title: "Business Traveler Special",
            prices: "From LKR 50,000.00 Average Per Night",
            buffet: "Business Buffet",
            tea: "Office Tea",
            spa: "Business Spa",
            pool: "Indoor Pool",
            imageUrl: "https://indiaoutbound.info/wp-content/uploads/2024/06/download.jpeg",
            exclusive: "Complimentary meeting room and office supplies."
          }
      ];

      filteredPackage: any;

  // filterPackageById(id: number) {
  //   console.log(id)
  //   this.filteredPackage = this.package.find(pkg => pkg.id === id);
  //   return this.filteredPackage;
  // }
  filterPackageById(id: number): any {
    return this.package.find(pkg => pkg.id == id) || null; // Return null if no package is found
  }
      
}