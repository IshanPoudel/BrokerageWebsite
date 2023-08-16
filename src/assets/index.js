import logoBrokerage from '../assets/mainLogo.png'; // Adjust the path as needed


const properties = [
    {
      "id": 1,
      "StreetAddress": "5615 Stone Cliff Ct",
      "City": "Dallas",
      "State": "TX",
      "ZipCode": "75287",
      "Photos": ["https://photos.zillowstatic.com/fp/501a042e52bd4ba3e14f5f478c0c27f0-cc_ft_1344.webp", "https://photos.zillowstatic.com/fp/7fdb3a57e8d083dd0abb8ccef8355b3b-cc_ft_768.webp","https://photos.zillowstatic.com/fp/f787e8a2b3c6d87bccc3c37be5fae7be-cc_ft_768.webp","https://photos.zillowstatic.com/fp/54c350980722802ae6393a3390b9ecd0-uncropped_scaled_within_1344_1008.webp","https://photos.zillowstatic.com/fp/7b68edcf6f276b359dd0b2b8105fe022-uncropped_scaled_within_1344_1008.webp" , "https://photos.zillowstatic.com/fp/a1ab59e9b54a2678d3b27372670f8ca7-d_d.webp"],
      "Price": "$2,950,000",
      "Bedroom": 5,
      "Bathroom": 7,
      "MLSListingID": "DFW123456",
      "SquareFeet": 2400,
      "LotSize": 0.35,
      "Featured": 1
    },
    {
      "id": 2,
      "StreetAddress": "6506 Beckwith Ct",
      "City": "Dallas",
      "State": "TX",
      "ZipCode": "75248",
      "Photos":  [
        "https://photos.zillowstatic.com/fp/2e0bfcb201c8aa58d452f6d57213f5ae-cc_ft_960.webp",
        "https://photos.zillowstatic.com/fp/aae6c19f3175c82ed865548b6cef99b3-cc_ft_960.webp",
        "https://photos.zillowstatic.com/fp/d157f256bf823feb9c6b110499517d9e-cc_ft_960.webp"
      ]
      ,
      "Price": "$740,000",
      "Bedroom": 4,
      "Bathroom": 3,
      "MLSListingID": "DFW789012",
      "SquareFeet": 2300,
      "LotSize": 6838,
      "Featured": 1
    },
    {
      "id": 3,
      "StreetAddress": "6206 Warm Mist Ln",
      "City": "Dallas",
      "State": "TX",
      "ZipCode": "75248",
      "Photos": [
        "https://photos.zillowstatic.com/fp/aae6c19f3175c82ed865548b6cef99b3-cc_ft_960.webp",
        "https://photos.zillowstatic.com/fp/2e0bfcb201c8aa58d452f6d57213f5ae-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/aae6c19f3175c82ed865548b6cef99b3-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/d157f256bf823feb9c6b110499517d9e-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/7e79d368b1ae2011ad099e1135cac9e5-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/0c558b23b4d84bc13740379a841bb0ec-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/3d7c63033c009f6719a25fdd2b04c2ab-cc_ft_192.webp"
      ]
      ,
      "Price": "$1,907,000",
      "Bedroom": 4,
      "Bathroom": 3,
      "MLSListingID": "2345678",
      "SquareFeet": 3132,
      "LotSize": 0.26,
      "Featured": 1
    },
    {
      "id": 4,
      "StreetAddress": "6707 Barkworth Dr",
      "City": "Dallas",
      "State": "TX",
      "ZipCode": "75248",
      "Photos": [
        "https://photos.zillowstatic.com/fp/d157f256bf823feb9c6b110499517d9e-cc_ft_960.webp",
        "https://photos.zillowstatic.com/fp/7e79d368b1ae2011ad099e1135cac9e5-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/0c558b23b4d84bc13740379a841bb0ec-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/3d7c63033c009f6719a25fdd2b04c2ab-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/79e42f1cebd8fb80de7b6f4483bb35f5-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/16a2af9191f2571559ca643a63acf5b6-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/4d85f10143a58c2971d95f664707fd9e-cc_ft_192.webp"
      ],
      "Price": "$1,049,000",
      "Bedroom": 4,
      "Bathroom": 5,
      "MLSListingID": "DFW567890",
      "SquareFeet": 3200,
      "LotSize": 0.30,
      "Featured": 1
    },
    {
      "id": 5,
      "StreetAddress": "7515 Northaven Rd",
      "City": "Dallas",
      "State": "TX",
      "ZipCode": "75038",
      "Photos":  [
        "https://photos.zillowstatic.com/fp/e41ae0da946ed61167006429b1494571-cc_ft_1344.webp",
        "https://photos.zillowstatic.com/fp/16a2af9191f2571559ca643a63acf5b6-cc_ft_192.webp",
        "https://photos.zillowstatic.com/fp/e41ae0da946ed61167006429b1494571-cc_ft_960.jpg",
        "https://photos.zillowstatic.com/fp/37ac06a8057a3887b7bebe8ce767eb03-cc_ft_960.jpg",
        "https://photos.zillowstatic.com/fp/68c3f67abcdf12e7679f54d2d94348fe-cc_ft_960.jpg"
      ],
      "Price": "$485,000",
      "Bedroom": 4,
      "Bathroom": 3,
      "MLSListingID": "DFW234567",
      "SquareFeet": 2200,
      "LotSize": 0.25,
      "Featured": 1
    },
    
      {
        "id": 6,
        "StreetAddress": "5656 Birch Lane",
        "City": "Garland",
        "State": "TX",
        "ZipCode": "75040",
        "Photos": [
          "https://photos.zillowstatic.com/fp/57056a003a6219d6c96687f7f8d51061-cc_ft_1344.webp",
          "photo_url_12.jpg",
          "https://photos.zillowstatic.com/fp/ea1933af8a13514a4b6dc4f65a60f261-cc_ft_192.webp",
          "https://photos.zillowstatic.com/fp/8df9346af8921e0fed5d9d882d587a39-cc_ft_192.webp"
        ],
        "Price": "$310,000",
        "Bedroom": 3,
        "Bathroom": 2,
        "MLSListingID": "DFW789123",
        "SquareFeet": 1600,
        "LotSize": 0.15,
        "Featured": 1
      },
      {
        "id": 7,
        "StreetAddress": "7878 Willow Street",
        "City": "Mesquite",
        "State": "TX",
        "ZipCode": "75149",
        "Photos": [
          "https://photos.zillowstatic.com/fp/a650d2f22e5e6766aded416dd953b837-cc_ft_1344.webp",
          "photo_url_14.jpg",
          "https://photos.zillowstatic.com/fp/3ccc5702b3bd949891f2e43d8760c451-cc_ft_192.webp",
          "https://photos.zillowstatic.com/fp/ec0327db900a2e19e60b7751fc1e96f1-cc_ft_192.webp"
        ],
        "Price": "$265,000",
        "Bedroom": 3,
        "Bathroom": 2,
        "MLSListingID": "DFW345678",
        "SquareFeet": 1500,
        "LotSize": 0.17,
        "Featured": 0
      },
      {
        "id": 8,
        "StreetAddress": "9898 Elmwood Avenue",
        "City": "Grand Prairie",
        "State": "TX",
        "ZipCode": "75052",
        "Photos": [
          
          "https://photos.zillowstatic.com/fp/18edb9864f3d8eba78afa7a158d3c661-cc_ft_192.webp",
          "https://photos.zillowstatic.com/fp/2466daf59f78fcf9df7a1d046b9fb608-cc_ft_192.webp"
        ],
        "Price": "$400,000",
        "Bedroom": 4,
        "Bathroom": 3,
        "MLSListingID": "DFW901234",
        "SquareFeet": 2100,
        "LotSize": 0.22,
        "Featured": 0
      },
      {
        "id": 9,
        "StreetAddress": "6767 Cedar Lane",
        "City": "Richardson",
        "State": "TX",
        "ZipCode": "75080",
        "Photos": [
          
          "https://photos.zillowstatic.com/fp/2c415ebedca6628e1feb0c88d87b73a9-cc_ft_192.webp",
          "https://photos.zillowstatic.com/fp/582501814f3c2e43c926b035f22b694a-cc_ft_192.webp"
        ],
        "Price": "$420,000",
        "Bedroom": 4,
        "Bathroom": 2,
        "MLSListingID": "DFW567890",
        "SquareFeet": 2000,
        "LotSize": 0.20,
        "Featured": 0
      },
      {
        "id": 10,
        "StreetAddress": "1111 Maple Avenue",
        "City": "Carrollton",
        "State": "TX",
        "ZipCode": "75006",
        "Photos": [
          
          "https://photos.zillowstatic.com/fp/d195294d9f8cd80c3bc999d0d1b0a4d6-cc_ft_192.webp",
          "https://photos.zillowstatic.com/fp/868830400cb0e7700d7069ad533c584b-cc_ft_192.webp"
        ],
        "Price": "$375,000",
        "Bedroom": 3,
        "Bathroom": 2,
        "MLSListingID": "DFW123456",
        "SquareFeet": 1800,
        "LotSize": 0.18,
        "Featured": 0
      },
      {
        "id": 11,
        "StreetAddress": "2323 Oakwood Drive",
        "City": "Allen",
        "State": "TX",
        "ZipCode": "75002",
        "Photos": [
         
          "https://photos.zillowstatic.com/fp/9ec4497039c47ea3258753d42e8edafb-cc_ft_192.webp",
          "https://photos.zillowstatic.com/fp/26df5a55b89d89d33e77b99d6b9d2350-cc_ft_192.webp"
        ],
        "Price": "$550,000",
        "Bedroom": 4,
        "Bathroom": 3,
        "MLSListingID": "DFW567890",
        "SquareFeet": 2200,
        "LotSize": 0.25,
        "Featured": 0
      },
      {
        "id": 12,
        "StreetAddress": "4545 Birch Street",
        "City": "McKinney",
        "State": "TX",
        "ZipCode": "75070",
        "Photos": [
          
          "https://photos.zillowstatic.com/fp/fa58c49fe4a6cd3e348bab601f6bb13e-cc_ft_192.webp",
          "https://photos.zillowstatic.com/fp/b20830c053a3bdedeaf6495ba35f39a4-cc_ft_192.webp"
        ],
        "Price": "$480,000",
        "Bedroom": 4,
        "Bathroom": 3,
        "MLSListingID": "DFW494954",
        "SquareFeet": 2100,
        "LotSize": 0.23,
        "Featured": 0
      }
    ]
    

export {logoBrokerage , properties}





    