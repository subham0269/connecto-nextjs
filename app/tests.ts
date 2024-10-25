import ff from '@/public/test/44.png';
import eminem from '@/public/test/eminem.png'
import kanye from '@/public/test/kanye.png'
import lil from '@/public/test/lil.png'
import mgk from '@/public/test/mgk.png'
import taylor from '@/public/test/taylor.png'
import { AtomicCard } from './Interfaces/components/Home';


export const artistTestList:AtomicCard[] = [
    {
      imgURL: eminem,
      name: 'Eminem'
    },
    {
      imgURL: taylor,
      name: 'Taylor Swift'
    },
    {
      imgURL: ff,
      name: '44 Phantom'
    },
    {
      imgURL: mgk,
      name: 'Machine Gun Kelly'
    },
    {
      imgURL: kanye,
      name: 'Kanye West'
    },
    {
      imgURL: lil,
      name: 'Lil Peep'
    }
]