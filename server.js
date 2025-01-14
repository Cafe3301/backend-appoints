const connectDB = require('./config/db');
const carRoutes = require('./routes/carRoutes');
const appointmentsRouter = require('./routes/appointmentRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
 origin: '*',
  credentials: true,
}));
app.use(express.json());

app.use('/api/cars', carRoutes);
app.use('/api/appointments', appointmentsRouter);  // Aqui estamos usando a rota de agendamentos
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));