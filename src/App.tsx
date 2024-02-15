import { useState, useEffect, useRef, MutableRefObject, FocusEvent } from 'react';
import { supabase } from './database';
import { returnType } from './exports';
import { Box, Spinner, TableContainer, Table, Tr, Th, Thead, Tbody, Input, Image } from '@chakra-ui/react';
import { data } from './fs.json';

function App() {

  const [ loading, setLoading ] = useState(true);
  const [ paramsl ] = useState<Map<number, {type: string, value: string}>>(new Map());

  const tl = useRef() as MutableRefObject<HTMLImageElement>;
  const tc = useRef() as MutableRefObject<HTMLImageElement>;
  const tr = useRef() as MutableRefObject<HTMLImageElement>;

  const ml = useRef() as MutableRefObject<HTMLImageElement>;
  const mc = useRef() as MutableRefObject<HTMLImageElement>;
  const mr = useRef() as MutableRefObject<HTMLImageElement>;

  const bl = useRef() as MutableRefObject<HTMLImageElement>;
  const bc = useRef() as MutableRefObject<HTMLImageElement>;
  const br = useRef() as MutableRefObject<HTMLImageElement>;

  const signIn = async () => {
    await supabase.auth.signInWithPassword({
      email: 'tempuser@gmail.com',
      password: '12345678'
    }).then(() => {
      setLoading(false);
    });
  }

  const findCard = async (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value != '') {
      const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name="+e.target.value;
      const response = await fetch(url, {method: "GET"});
      response.json().then((val: returnType) => {
        val.data.forEach((card) => {
          console.log(card);
        })
      })
    }
    
  }

  useEffect(() => {
    if (localStorage.getItem("sb-svqubdprnzkhvgwslxzw-auth-token") == null) {
      signIn();
    } else {
      setLoading(false);
    }

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    
    const todaysData = data[day];

    todaysData.forEach((val, index) => {
      paramsl.set(index, val);
    })
    
  }, [])

  function AppUI() {
    return (
      <Box display='flex' flexDir='column' w='100vw' h='100vh' justifyContent='center' alignItems='center'>
        <TableContainer marginTop={16}>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>{paramsl.get(0)?.type + ' ' + paramsl.get(0)?.value}</Th>
                <Th>{paramsl.get(1)?.type + ' ' + paramsl.get(1)?.value}</Th>
                <Th>{paramsl.get(2)?.type + ' ' + paramsl.get(2)?.value}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>{paramsl.get(3)?.type + ' ' + paramsl.get(3)?.value}</Th>
                <Th w='40' h='40'>
                  <Input placeholder='' onBlur={(e) => findCard(e)}/>
                  <Image ref={tl}/>
                </Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={tc} />
                </Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={tr} />
                </Th>
              </Tr>
              <Tr>
                <Th>{paramsl.get(4)?.type + ' ' + paramsl.get(4)?.value}</Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={ml} />
                </Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={mc} />
                </Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={mr} />
                </Th>
              </Tr>
              <Tr>
                <Th>{paramsl.get(5)?.type + ' ' + paramsl.get(5)?.value}</Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={bl} />
                </Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={bc} />
                </Th>
                <Th w='40' h='40'>
                  <Input placeholder=''/>
                  <Image ref={br} />
                </Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    )
  }

  return (
    <>
      <Box>
        {loading ? 
          <Box w='100vw' h='100vh' display='flex' justifyContent={'center'} alignItems='center'>
            <Spinner w={24} h={24} color='red.300' thickness='4px' emptyColor='gray.200'/>
          </Box>
        :
          <AppUI />
        }
      </Box>
    </>
  )
}

export default App
