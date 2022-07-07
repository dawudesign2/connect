const corsMiddleware = (req, res, next) => {
    const allowOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3003',
    ];
    const origin = req.headers.origin;
    // on autorise explicitement le domaine du front
    if (allowOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // on autorise le partage du cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    // // on autorise le partage de ressources entre origines
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  };
 module.exports = corsMiddleware;