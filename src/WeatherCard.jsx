import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./WeatherCard.css";

export default function WeatherCard({Info}) {
    const IMG_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1075";
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";


    return (
        <div>
            <div className="weather-container" >
                <Card sx={{ maxWidth: 345 }} className="weather-card">
                <CardMedia
                    sx={{ height: 140 }}
                    image= {Info.humidity > 80 ? RAIN_URL : Info.temp < 15 ? COLD_URL : HOT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {Info.city} {Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp < 15 ? <AcUnitIcon /> : <SunnyIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} style={{color: "#1E3A8A"}}>
                        <p>Temperature = {Info.temp}&deg;C</p>
                        <p>Min Temperature = {Info.tempMin}&deg;C</p>
                        <p>Max Temperature = {Info.tempMax}&deg;C</p>
                        <p>Humidity = {Info.humidity}</p>
                        <p>The weather can be described as <b>{Info.weather}</b> and feels Like <b>{Info.feelsLike}&deg;C</b></p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}