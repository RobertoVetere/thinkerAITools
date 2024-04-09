const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ruta al repositorio local
const repoPath = 'X:\\Proyectos Angular\\coreui-free-angular-admin-template-main';

// Porcentaje de días en los que se harán commits
const commitPercentage = 45;

// Fecha actual
const endDate = new Date();

// Retrocede 90 días
const startDate = new Date(endDate);
startDate.setDate(startDate.getDate() - 365);

// Bucle sobre cada día en el rango de fechas
let currentDate = new Date(startDate);
while (currentDate <= endDate) {
    // Determinar si se hará commit en este día
    if (Math.random() * 100 < commitPercentage) {
        // Crear un archivo para representar el commit
        const filename = `${currentDate.toISOString().slice(0, 10)}.txt`;
        const filepath = path.join(repoPath, filename);
        fs.writeFileSync(filepath, `Commit message for ${currentDate.toISOString().slice(0, 10)}`);

        // Agregar el archivo al área de preparación (staging area)
        execSync(`git -C "${repoPath}" add ${filename}`);

        // Realizar el commit
        execSync(`git -C "${repoPath}" commit --date="${currentDate.toISOString()}" -m "Daily commit for ${currentDate.toISOString().slice(0, 10)}"`);
    }
    // Avanzar al siguiente día
    currentDate.setDate(currentDate.getDate() + 1);
}