import { supabase } from "./database"

type card_image = {
    "id" : number,
    "image_url" : string,
    "image_url_cropped" : string,
    "image_url_small" : string
  }
  
  type card_price = {
    "amazon_price" : number,
    "cardmarket_price" : number,
    "coolstuffinc_price" : number,
    "ebay_price" : number,
    "tcgplayer_price" : number
  }
  
type card_set = {
    "set_code" : string,
    "set_name" : string,
    "set_price" : string,
    "set_rarity" : string,
    "set_rarity_code" : string
  }
  
export type card = {
    "archetype" : string,
    "atk" : number,
    "attribute" : string,
    "card_images" : card_image[],
    "card_prices" : card_price[],
    "card_sets" : card_set[],
    "def" : number,
    "desc" : string,
    "frameType" : string,
    "id" : number,
    "level" : number,
    "name" : string,
    "race" : string,
    "type" : string,
  }
  
  export type returnType = {
    data: card[]
  }

  export const race = [
  "Aqua",
  "Beast",
  "Beast-Warrior",
  "Creator-God",
  "Cyberse",
  "Dinosaur",
  "Divine-Beast",
  "Dragon",
  "Fairy",
  "Fiend",
  "Fish",
  "Insect",
  "Machine",
  "Plant",
  "Psychic",
  "Pyro",
  "Reptile",
  "Rock",
  "Sea Serpent",
  "Spellcaster",
  "Thunder",
  "Warrior",
  "Winged Beast",
  "Wyrm",
  "Zombie",
  "Spell Cards",
];

export const type = [
  "Effect Monster",
  "Flip Effect Monster",
  "Flip Tuner Effect Monster",
  "Gemini Monster",
  "Normal Monster",
  "Normal Tuner Monster",
  "Pendulum Effect Monster",
  "Pendulum Effect Ritual Monster",
  "Pendulum Flip Effect Monster",
  "Pendulum Normal Monster",
  "Pendulum Tuner Effect Monster",
  "Ritual Effect Monster",
  "Ritual Monster",
  "Spell Card",
  "Spirit Monster",
  "Toon Monster",
  "Trap Card",
  "Tuner Monster",
  "Union Effect Monster",
  "Fusion Monster",
  "Link Monster",
  "Pendulum Effect Fusion Monster",
  "Synchro Monster",
  "Synchro Pendulum Effect Monster",
  "Synchro Tuner Monster",
  "XYZ Monster",
  "XYZ Pendulum Effect Monster",
  "Skill Card",
  "Token",
];

export const frameType = [
  "normal",
  "effect",
  "ritual",
  "fusion",
  "synchro",
  "xyz",
  "link",
  "normal_pendulum",
  "effect_pendulum",
  "ritual_pendulum",
  "fusion_pendulum",
  "synchro_pendulum",
  "xyz_pendulum",
  "spell",
  "trap",
  "token",
  "skill",
];

export const attributes = [
  "dark",
  "light",
  "water",
  "fire",
  "earth",
  "wind",
  "divine",
];

export const params = [
    "type",
    "attributes",
    "race",
    "frametype",
    "atk",
    "def",
]

export const numvals = [
  100,200,300,400,500,600,700,800,900,1000,
  1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,
  2100,2200,2300,2400,2500,2600,2700,2800,2900,3000
]

export async function checkForImage(card: card) {
  const { data, error } = await supabase.from('traphole_images').select('id').eq('id', card.id);

  if (error) {
      console.error(error);
  }

  if (data != undefined && data?.length > 0) {
      console.log("Exists");
  } else {
      console.error("Card image does not exist in storage");
      console.log("Getting image to save...");
      const url = card.card_images[0].image_url_cropped;
      const imageblob = (await fetch(url, {method: "GET"})).blob();
      imageblob.then((blob) => {
          sendImage(card.id, blob);
      })
  }
}

export const sendImage = async (id: number, file: Blob) => {
  supabase.storage.from('cardimages').upload(`${id}.jpg`, file, {
      cacheControl: '3600',
      upsert: true
  }).then(({error}) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log("Image has been uploaded");

    supabase.from('traphole_images').insert({id: id}).then(({error}) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Image index has been set");
    })
  });
}

export function getParam(param: string) {
    let val = "";
    switch (param) {
        case "type": {
            val = type[Math.floor(Math.random() * type.length)];
            break;
        }
        case "attributes": {
            val = attributes[Math.floor(Math.random() * attributes.length)];
            break;
        }
        case "race": {
            val = race[Math.floor(Math.random() * race.length)];
            break;
        }
        case "frametype": {
            val = frameType[Math.floor(Math.random() * frameType.length)];
            break;
        }
        case "atk": {
            val = String(numvals[Math.floor(Math.random() * numvals.length)]);
            break;
        }
        case "def": {
            val = String(numvals[Math.floor(Math.random() * numvals.length)]);
            break;
        }
    }
    return {type: param, value: val};
}

export function chooseParam(count: number, array: string[]) {
    const answer: string[] = []
    let counter = 0;

    while (counter < count) {
        const rand = array[Math.floor(Math.random() * array.length)];
        if (!answer.some(an => an === rand)){
            answer.push(rand);
            counter++;
        }

    }
    return answer;
}

