import { useEffect } from 'react';
import { HTTP } from '../../../service/http-common'

const GetData = props => {
    const getProject = async () => {
        await HTTP.get('admin/v1/projects').then(res => {
            console.log('Res', res.data.data);
        })
        console.log('HTTP', HTTP);
    }
    
    useEffect(() => {
        getProject()
    })
    return (
        <div>
            <h1>Getting Data</h1>
        </div>
    )
}
export default GetData;