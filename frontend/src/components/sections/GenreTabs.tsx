import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';
import { TGenreObj, TSongObj, TAlbum } from '@types';
import { keys, labels } from '@labels';

interface IGenreTabs {
  albums: TAlbum[];
}

const GenreTabs: FC<IGenreTabs> = (props) => {
  const { albums } = props;

  // const genres: TGenreObj[] = [
  //   {
  //     label: labels.all,
  //     key: keys.all,
  //     songs: [],
  //   },
  // ]
  
  return (
    <div className='container text-white'>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Account
        </TabsContent>
        <TabsContent value="password">
          Password
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default GenreTabs;