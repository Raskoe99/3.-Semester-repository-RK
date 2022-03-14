<script>
    //import { faker } from '@faker-js/faker';


    import faker from ''
    
    let id = faker.helpers.createCard().phone
    let names = faker.internet.userName()
    let emails = faker.internet.email()
    let facePics = faker.internet.avatar()
</script>

<td>{id}</td>
<td>{names}</td>
<td>{emails}</td>
<td><img src="{facePics}" alt="pic{id}"></td>
