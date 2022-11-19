import { Badge,Table } from 'react-bootstrap';

function DisplayData({responeData}) {
    const getLevelBadge = level => {
        const bg = {
            movie: 'primary',
            series: 'success',
            episode: 'warning',
        };
        return bg[level];
    };

  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th> </th>
                <th>Title</th>
                <th>Year</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {
                responeData.map(
                    ( item , i) => (
                        <tr key={i}>
                            <td><img src={item.Poster} alt={item.Title} width="50" /></td>
                            <td>{item.Title}</td>
                            <td>{item.Year}</td>
                            <td><Badge bg={getLevelBadge( item.Type )}>{item.Type}</Badge></td>
                        </tr>
                    )
                )
            }
        </tbody>                    
    </Table>
  );
};

export default DisplayData;