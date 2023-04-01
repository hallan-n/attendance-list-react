import React, { useState } from "react";
import "./style.css";
import Card from "../../components/Card";

export default function Home() {

    const [studentName, setStudentName] = useState()

    return (
        <div className="container">
            <h1>Name: {studentName}</h1>
            <input
                type="text"
                placeholder="Digite o nome..."
                onChange={(e) => setStudentName(e.target.value)}
            />
            <button type="button">Adicionar</button>

            <Card name="João" time="15:35:20" />
            <Card name="Hállan" time="16:35:20" />
            <Card name="Mara" time="18:35:20" />
        </div>
    );
}
