import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ButtonGroupData = ({setButtonValue,searchValue,setFilterKey,setPage}) => {
    return (
        <ButtonGroup size="mb-2" style={{float: 'right',border:'none !important'}} className="mb-2">
          <Button className ="bg-light" style={{color: 'black'}} onClick={() => {setButtonValue('');setFilterKey(searchValue);setPage(1)}}>Any</Button>
          <Button  className ="bg-primary" onClick={() => {setButtonValue('movie',searchValue);setFilterKey(searchValue);setPage(1)}}>movie</Button>
          <Button  className ="bg-success" onClick={() => {setButtonValue('series',searchValue);setFilterKey(searchValue);setPage(1)}}>series</Button>
          <Button  className ="bg-warning " onClick={() => {setButtonValue('episode',searchValue);setFilterKey(searchValue);setPage(1)}}>episode</Button>
        </ButtonGroup>
    );
  }
  
  export default ButtonGroupData;