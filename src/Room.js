import React, { useEffect, useState } from "react";
import { Mic, MicOff, PhoneOff, Video } from "react-feather";
import Participant from "./Participant";

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} isRemote={true} />
  ));

  return (
    <div className="room">
      <div style={{
        display: "flex",
        width: "100%",
        position: "absolute",
        padding: "3px"
      }}>
        <div className='buttns'><Video /></div>
        <div className='buttns' onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <MicOff /> : <Mic />}
        </div>
        <button className='buttns' onClick={handleLogout}><PhoneOff /></button>
      </div>
      
      <div className="local-participant">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
            isMuted={isMuted}
            isRemote={false}
          />
        ) : (
          ""
        )}
      </div>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
  );
};

export default Room;
