import { Router} from 'https://deno.land/x/oak/mod.ts';
import {addUser, getUsers, getUser, updateUser, deleteUser} from './controllers/user-contoller.ts';

const router = new Router();

router.post('/api/v1/adduser', addUser);
router.get('/api/v1/getallusers', getUsers);
router.get('/api/v1/getuser/:id', getUser);
router.put('/api/v1/updateuser/:id', updateUser);
router.delete('/api/v1/deleteuser/:id', deleteUser);

export default router;