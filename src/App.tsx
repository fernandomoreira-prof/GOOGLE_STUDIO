import React, { useState } from 'react';
import { ScreenId, Doctor, ServiceProcedure, ClinicUnit, BookingState } from './types';
import { DOCTORS, CLINIC_UNITS, INITIAL_BOOKING } from './data/mockData';
import { HeaderIOS } from './components/HeaderIOS';
import { BottomNavBar } from './components/BottomNavBar';
import { ScreenSwitcher } from './components/ScreenSwitcher';
import { Modals } from './components/Modals';
import { HomeScreen } from './screens/HomeScreen';
import { CatalogScreen } from './screens/CatalogScreen';
import { DoctorProfileScreen } from './screens/DoctorProfileScreen';
import { ScheduleScreen } from './screens/ScheduleScreen';
import { MapScreen } from './screens/MapScreen';
import { ConfirmationScreen } from './screens/ConfirmationScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);
  const [selectedUnit, setSelectedUnit] = useState<ClinicUnit>(CLINIC_UNITS[0]);
  const [bookingState, setBookingState] = useState<BookingState>(INITIAL_BOOKING);
  const [isPhoneFrame, setIsPhoneFrame] = useState(true);

  // Modals state
  const [showUnitSelector, setShowUnitSelector] = useState(false);
  const [showUnitPhotos, setShowUnitPhotos] = useState(false);
  const [showConciergeCall, setShowConciergeCall] = useState(false);
  const [showCheckupDetails, setShowCheckupDetails] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showConsultasModal, setShowConsultasModal] = useState(false);
  const [showPerfilModal, setShowPerfilModal] = useState(false);

  // Handlers
  const handleUpdateBooking = (partial: Partial<BookingState>) => {
    setBookingState((prev) => ({
      ...prev,
      ...partial,
    }));
  };

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    handleUpdateBooking({
      doctor,
      price: doctor.price,
    });
  };

  const handleSelectUnit = (unit: ClinicUnit) => {
    setSelectedUnit(unit);
    handleUpdateBooking({
      unit,
    });
  };

  const handleSelectProcedureAndBook = (proc: ServiceProcedure, doctor?: Doctor) => {
    const doc = doctor || DOCTORS[0];
    setSelectedDoctor(doc);
    handleUpdateBooking({
      procedureName: proc.title,
      doctor: doc,
      price: proc.price,
    });
    setCurrentScreen('schedule');
  };

  const handleConfirmSchedule = () => {
    const randomProtocol = `#AUR-2024-${Math.floor(1000 + Math.random() * 9000)}`;
    handleUpdateBooking({
      protocolNumber: randomProtocol,
    });
    setCurrentScreen('confirmation');
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] antialiased relative overflow-x-hidden flex flex-col items-center justify-start">
      {/* Ambient Luxury Atmospheric Lighting Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#cce5ff] opacity-40 blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-[#7df4ff] opacity-30 blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-96 h-96 rounded-full bg-[#dae2fd] opacity-35 blur-3xl"></div>
      </div>

      {/* Screen Switcher Bar (Quick Navigation & Device Frame Toggle) */}
      <ScreenSwitcher
        currentScreen={currentScreen}
        onSelectScreen={(screen) => setCurrentScreen(screen)}
        isPhoneFrame={isPhoneFrame}
        onTogglePhoneFrame={() => setIsPhoneFrame(!isPhoneFrame)}
      />

      {/* Main Canvas: Phone Frame Container or Fullscreen */}
      <div
        className={`relative z-10 w-full min-h-screen flex flex-col transition-all duration-300 ${
          isPhoneFrame
            ? 'max-w-[430px] my-0 sm:my-4 sm:rounded-[44px] bg-[#f7f9fb] shadow-[0_25px_60px_-15px_rgba(0,97,148,0.2)] border-0 sm:border-[8px] sm:border-[#1e293b]/90 overflow-hidden'
            : 'max-w-4xl mx-auto'
        }`}
      >
        {/* iOS Native Status Bar + Dynamic Island */}
        <header className="sticky top-0 z-40 bg-[#f7f9fb]/80 backdrop-blur-2xl">
          <HeaderIOS
            currentScreen={currentScreen}
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenNotifications={() => setShowNotifications(true)}
          />
        </header>

        {/* Screen Content Router */}
        <main className="flex-1 w-full">
          {currentScreen === 'home' && (
            <HomeScreen
              onNavigate={(s) => setCurrentScreen(s)}
              onSelectDoctor={handleSelectDoctor}
              onOpenNotifications={() => setShowNotifications(true)}
              onOpenCheckupDetails={() => setShowCheckupDetails(true)}
              onOpenConciergeCall={() => setShowConciergeCall(true)}
            />
          )}

          {currentScreen === 'catalog' && (
            <CatalogScreen
              onNavigate={(s) => setCurrentScreen(s)}
              onSelectProcedureAndBook={handleSelectProcedureAndBook}
              onOpenNotifications={() => setShowNotifications(true)}
              onOpenConciergeCall={() => setShowConciergeCall(true)}
            />
          )}

          {currentScreen === 'doctor' && (
            <DoctorProfileScreen
              onNavigate={(s) => setCurrentScreen(s)}
              doctor={selectedDoctor}
              onSelectSchedule={(doc) => {
                handleSelectDoctor(doc);
                setCurrentScreen('schedule');
              }}
            />
          )}

          {currentScreen === 'schedule' && (
            <ScheduleScreen
              onNavigate={(s) => setCurrentScreen(s)}
              doctor={selectedDoctor}
              unit={selectedUnit}
              onOpenUnitSelector={() => setShowUnitSelector(true)}
              bookingState={bookingState}
              onUpdateBooking={handleUpdateBooking}
              onConfirmSchedule={handleConfirmSchedule}
            />
          )}

          {currentScreen === 'map' && (
            <MapScreen
              onNavigate={(s) => setCurrentScreen(s)}
              selectedUnit={selectedUnit}
              onSelectUnit={handleSelectUnit}
              onOpenConciergeCall={() => setShowConciergeCall(true)}
              onOpenUnitPhotos={() => setShowUnitPhotos(true)}
            />
          )}

          {currentScreen === 'confirmation' && (
            <ConfirmationScreen
              onNavigate={(s) => setCurrentScreen(s)}
              bookingState={bookingState}
              onOpenWalletModal={() => setShowWalletModal(true)}
              onOpenCalendarModal={() => setShowCalendarModal(true)}
            />
          )}
        </main>

        {/* Floating Glass Bottom Navigation Bar */}
        <BottomNavBar
          currentScreen={currentScreen}
          onNavigate={(s) => setCurrentScreen(s)}
          onOpenConsultasModal={() => setShowConsultasModal(true)}
          onOpenPerfilModal={() => setShowPerfilModal(true)}
        />
      </div>

      {/* Global Modals */}
      <Modals
        showUnitSelector={showUnitSelector}
        onCloseUnitSelector={() => setShowUnitSelector(false)}
        selectedUnit={selectedUnit}
        onSelectUnit={handleSelectUnit}
        showUnitPhotos={showUnitPhotos}
        onCloseUnitPhotos={() => setShowUnitPhotos(false)}
        showConciergeCall={showConciergeCall}
        onCloseConciergeCall={() => setShowConciergeCall(false)}
        showCheckupDetails={showCheckupDetails}
        onCloseCheckupDetails={() => setShowCheckupDetails(false)}
        onScheduleCheckup={() => {
          handleUpdateBooking({
            procedureName: 'Check-up Anual Pré-agendado (3 exames inclusos)',
            price: 1800,
          });
          setCurrentScreen('schedule');
        }}
        showWalletModal={showWalletModal}
        onCloseWalletModal={() => setShowWalletModal(false)}
        showCalendarModal={showCalendarModal}
        onCloseCalendarModal={() => setShowCalendarModal(false)}
        showNotifications={showNotifications}
        onCloseNotifications={() => setShowNotifications(false)}
        showConsultasModal={showConsultasModal}
        onCloseConsultasModal={() => setShowConsultasModal(false)}
        onSelectConsultaDetail={() => setCurrentScreen('confirmation')}
        showPerfilModal={showPerfilModal}
        onClosePerfilModal={() => setShowPerfilModal(false)}
      />
    </div>
  );
}
