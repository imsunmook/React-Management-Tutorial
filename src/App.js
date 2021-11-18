import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer'

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '830120',
  'gender' : '남자',
  'job' : '무직',
},
{
'id' : 2,
'image' : 'https://placeimg.com/64/64/2',
'name' : 'A',
'birthday' : '830120',
'gender' : '남자',
'job' : 'B',
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : 'B',
  'birthday' : '830120',
  'gender' : '남자',
  'job' : 'B',
  },
]
function App() {
  return (
    <div>

{
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              
              />

          )
        })

      }

    </div>
  );
}

export default App;
