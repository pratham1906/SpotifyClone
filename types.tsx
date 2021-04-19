export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  YourLibrary:undefined;
  Premium:undefined;
};

export type HomeScreenParamList = {
  Home: undefined;
  AlbumScreen:undefined;
};

export type SearchScreenParamList = {
  Search: undefined;
};

export type YourLibraryParamList = {
  YourLibrary: undefined;
};
export type PremiumParamList = {
  Premium: undefined;
};

export type Album ={
  
  id:string,
  name:string,
  by:string,
  numberOfLikes:number,
  imageUri:string,
  artistsHeadline:string,
  
}

export type Song={
id:string,
imageUri:string,
title:string,
artist:string
}

