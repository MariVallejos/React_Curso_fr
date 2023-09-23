import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'drpryhodf',
    api_key: '592294874276173',
    api_secret: '6F2bUZzu8svPoqdUhKExfZAMN28',
    secure: true
});


describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob(); //los files
        const file = new File([blob], 'foto.jpg');//creo el archivo

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');//espera q sea un string

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {//elimina resources propio del cloudinary
           resource_type: 'image'
        });
        // console.log({ cloudResp })

    });

    test('debe de retornar null', async() => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );
        
    });


    
});