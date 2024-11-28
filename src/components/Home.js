import React from 'react'
import clippy from 'clippyjs'

import './Home.css'

const Home = () => {
    window.CLIPPY_CDN = 'https://cdn.jsdelivr.net/gh/pi0/clippyjs/assets/agents/'
    // Close the Start menu if clicked outside of it
    window.addEventListener('click', function(event) {
        const startMenu = document.getElementById('startMenu');
        if (!startMenu.contains(event.target) && event.target !== document.getElementById('startButton')) {
            startMenu.style.display = 'none';
        }
    });

    function openStartMenu () {
        const startMenu = document.getElementById('startMenu');
        // Toggle visibility of the start menu
        if (startMenu.style.display === "none" || startMenu.style.display === "") {
            startMenu.style.display = "block";
            // startMenu.style.marginBottom = `${startButton.offsetHeight.toString()}px`;
        } else {
            startMenu.style.display = "none";
        }
    };

    function addClippy () {
        clippy.load('Clippy', (agent) => {
            agent.show();
            agent.moveTo(100, 100);
            agent.speak("Hello World!");
        });
    }

    return (
        <div className="taskbar">
            <button id="startButton" className="start-btn" onClick={openStartMenu}>⊞ start</button>
            <div id="startMenu" className="start-menu">
                <a>Lorem Ipsum</a>
                <button id="mazeSolverButton">Maze Solver</button>
                <button id="addClippy" onClick={addClippy}>Add Clippy</button>
            </div>
            <div class="quick-launch">
                <button className="icon">📁</button>
                <button className="icon">🌐</button>
            </div>
            <div className="taskbar-items">
                <div className="task-item">My Computer</div>
                <div className="task-item">Internet Explorer</div>
                <div className="task-item">Word</div>
            </div>
            <div className="system-tray">
                <div className="clock">3:00 PM</div>
                <div className="tray-icon">🔊</div>
                <div className="tray-icon">📶</div>
                <div className="tray-icon">🔋</div>
            </div>
        </div>
    )
}

export default Home