import path from 'path';
import { promises as fs } from 'fs';

const getModel = async (req, res) => {

    const jsonDirectory = path.join(process.cwd(), 'json');

    const fileContents = await fs.readFile(jsonDirectory + '/model.json', 'utf8');

    res.status(200).json(fileContents);
}

export default getModel