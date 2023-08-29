import partners from '../../../app/data/partners';

export default function handler(req, res) {
  res.status(200).json(partners);
}
