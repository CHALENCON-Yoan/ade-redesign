const scheduleData = `<?xml version="1.0" encoding="UTF-8"?>
<events>
	<event id="165060" activityId="143527" session="0" repetition="0" name="Architecture des réseaux" endHour="17:00" startHour="15:30" date="02/09/2024" absoluteSlot="1938" slot="34" day="0" week="4" additionalResources="0" duration="6" info="" note="" color="204,153,255" isLockPosition="false" oldDuration="6" oldSlot="35" oldDay="0" oldWeek="4" lastUpdate="07/17/2024 11:38" creation="07/11/2024 14:24" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1114031" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1114032" nodeOrId="-1" quantity="1" category="instructor" name="OBJOIS PHILIPPE" id="74174"/>
			<resource fromWorkflow="false" nodeId="1114033" nodeOrId="-1" quantity="1" category="category5" name="R3.06 : Architecture des réseaux" id="70896"/>
			<resource fromWorkflow="false" nodeId="1114035" nodeOrId="1114034" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
	<event id="165125" activityId="143695" session="0" repetition="0" name="Anglais" endHour="15:30" startHour="14:00" date="02/09/2024" absoluteSlot="1932" slot="28" day="0" week="4" additionalResources="0" duration="6" info="" note="" color="255,140,102" isLockPosition="false" oldDuration="6" oldSlot="29" oldDay="0" oldWeek="4" lastUpdate="07/17/2024 11:21" creation="07/11/2024 13:58" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115154" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1-TP1G" id="73867"/>
			<resource fromWorkflow="false" nodeId="1115155" nodeOrId="-1" quantity="1" category="instructor" name="METGE CECILE" id="74717"/>
			<resource fromWorkflow="false" nodeId="1115156" nodeOrId="-1" quantity="1" category="category5" name="R3.12 : Anglais" id="70877"/>
			<resource fromWorkflow="false" nodeId="1115166" nodeOrId="1115157" quantity="1" category="classroom" name="B118" id="64318"/>
		</resources>
		<additional/>
	</event>
	<event id="164723" activityId="143872" session="0" repetition="0" name="Probabilités" endHour="12:30" startHour="11:00" date="02/09/2024" absoluteSlot="1920" slot="16" day="0" week="4" additionalResources="0" duration="6" info="" note="" color="172,230,0" isLockPosition="true" oldDuration="6" oldSlot="17" oldDay="0" oldWeek="4" lastUpdate="07/11/2024 14:47" creation="07/11/2024 13:58" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1116564" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1116565" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="74301"/>
			<resource fromWorkflow="false" nodeId="1116567" nodeOrId="-1" quantity="1" category="category5" name="R3.08 : Probabilités" id="70887"/>
			<resource fromWorkflow="false" nodeId="1116573" nodeOrId="1116568" quantity="1" category="classroom" name="A001" id="64184"/>
		</resources>
		<additional/>
	</event>
	<event id="164713" activityId="143693" session="0" repetition="0" name="Réunion de rentrée INFO2" endHour="11:00" startHour="10:30" date="02/09/2024" absoluteSlot="1918" slot="14" day="0" week="4" additionalResources="0" duration="2" info="" note="" color="230,230,230" isLockPosition="true" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="07/11/2024 14:47" creation="07/11/2024 10:10" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115116" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="363951" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="74301"/>
			<resource fromWorkflow="false" nodeId="364125" nodeOrId="364112" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
</events>`;

const scheduleDataNoLesson = `<?xml version="1.0" encoding="UTF-8"?>
<events/>`;

const oldScheduleDataDoubleResource = `<?xml version="1.0" encoding="UTF-8"?>
<events>
	<event id="12866" activityId="717" session="0" repetition="0" name="Développement orienté objet" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,0,255" isLockPosition="false" oldDuration="3" oldSlot="13" oldDay="1" oldWeek="23" lastUpdate="07/18/2023 11:53" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="20714" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2D" id="72"/>
			<resource fromWorkflow="false" nodeId="20384" nodeOrId="-1" quantity="1" category="instructor" name="OCCELLO MICHEL" id="5294"/>
			<resource fromWorkflow="false" nodeId="57469" nodeOrId="-1" quantity="1" category="category5" name="R2.01 Développement orienté objets" id="1534"/>
			<resource fromWorkflow="false" nodeId="14243" nodeOrId="13841" quantity="1" category="classroom" name="B101" id="58"/>
		</resources>
		<additional/>
	</event>
	<event id="12871" activityId="710" session="0" repetition="0" name="Développement orienté objet" endHour="12:30" startHour="11:00" date="06/02/2024" absoluteSlot="3632" slot="7" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,0,255" isLockPosition="false" oldDuration="3" oldSlot="16" oldDay="1" oldWeek="23" lastUpdate="07/18/2023 11:53" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="7370" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2C" id="70"/>
			<resource fromWorkflow="false" nodeId="20382" nodeOrId="-1" quantity="1" category="instructor" name="OCCELLO MICHEL" id="5294"/>
			<resource fromWorkflow="false" nodeId="57468" nodeOrId="-1" quantity="1" category="category5" name="R2.01 Développement orienté objets" id="1534"/>
			<resource fromWorkflow="false" nodeId="14291" nodeOrId="14290" quantity="1" category="classroom" name="B102" id="60"/>
		</resources>
		<additional/>
	</event>
	<event id="13256" activityId="7224" session="0" repetition="3" name="Méthodes d&apos;optimisation" endHour="17:00" startHour="15:30" date="06/02/2024" absoluteSlot="3641" slot="16" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="153,51,255" isLockPosition="false" oldDuration="3" oldSlot="18" oldDay="1" oldWeek="24" lastUpdate="09/19/2023 09:53" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="27866" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD2-TP2J" id="197"/>
			<resource fromWorkflow="false" nodeId="27851" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="2404"/>
			<resource fromWorkflow="false" nodeId="62961" nodeOrId="-1" quantity="1" category="category5" name="R4.04 : Méthodes d&apos;optimisation" id="4375"/>
			<resource fromWorkflow="false" nodeId="27855" nodeOrId="27852" quantity="1" category="classroom" name="B122" id="63"/>
		</resources>
		<additional/>
	</event>
	<event id="12877" activityId="1522" session="0" repetition="1" name="Outils numériques pour les statistiques descriptives" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="124,0,166" isLockPosition="false" oldDuration="3" oldSlot="13" oldDay="1" oldWeek="23" lastUpdate="07/19/2023 09:53" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="20973" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1-TP1A" id="62"/>
			<resource fromWorkflow="false" nodeId="20580" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="2404"/>
			<resource fromWorkflow="false" nodeId="57567" nodeOrId="-1" quantity="1" category="category5" name="R2.08 Outils numériques pour les statistiques descriptives" id="708"/>
			<resource fromWorkflow="false" nodeId="26792" nodeOrId="26790" quantity="1" category="classroom" name="B122" id="63"/>
		</resources>
		<additional/>
	</event>
	<event id="12593" activityId="10069" session="0" repetition="1" name="Développement d&apos;applications avec IHM" endHour="18:30" startHour="17:00" date="06/02/2024" absoluteSlot="3644" slot="19" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="255,51,51" isLockPosition="false" oldDuration="3" oldSlot="19" oldDay="1" oldWeek="23" lastUpdate="11/06/2023 16:39" creation="07/18/2023 07:07" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="58442" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2D" id="72"/>
			<resource fromWorkflow="false" nodeId="35714" nodeOrId="-1" quantity="1" category="instructor" name="GAUCHE SYLVAIN" id="1555"/>
			<resource fromWorkflow="false" nodeId="58430" nodeOrId="-1" quantity="1" category="category5" name="R2.02 Développement d&apos;applications avec IHM" id="623"/>
			<resource fromWorkflow="false" nodeId="58432" nodeOrId="58431" quantity="1" category="classroom" name="B122" id="63"/>
		</resources>
		<additional/>
	</event>
	<event id="12497" activityId="1705" session="0" repetition="0" name="Introduction à  la GSI" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="153,255,51" isLockPosition="false" oldDuration="3" oldSlot="7" oldDay="1" oldWeek="23" lastUpdate="07/19/2023 08:43" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="21104" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2C" id="70"/>
			<resource fromWorkflow="false" nodeId="20616" nodeOrId="-1" quantity="1" category="instructor" name="CONSTANT BLANDINE" id="2611"/>
			<resource fromWorkflow="false" nodeId="62731" nodeOrId="-1" quantity="1" category="category5" name="R2.10 Introduction à  la gestion des systèmes..." id="4380"/>
			<resource fromWorkflow="false" nodeId="19043" nodeOrId="18830" quantity="1" category="classroom" name="B102" id="60"/>
		</resources>
		<additional/>
	</event>
	<event id="20375" activityId="5413" session="0" repetition="0" name="rattrapage BUT 2 FI" endHour="17:30" startHour="13:30" date="06/02/2024" absoluteSlot="3637" slot="12" day="1" week="24" additionalResources="0" duration="8" info="" note="" color="255,255,255" isLockPosition="false" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="01/29/2024 17:22" creation="01/29/2024 17:21" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="33143" nodeOrId="-1" quantity="1" category="classroom" name="B011" id="167"/>
			<resource fromWorkflow="false" nodeId="33151" nodeOrId="-1" quantity="1" category="classroom" name="B103" id="61"/>
		</resources>
		<additional/>
	</event>
	<event id="13274" activityId="12903" session="0" repetition="3" name="SAÉ-S4.A.01 - 2J" endHour="12:30" startHour="11:00" date="06/02/2024" absoluteSlot="3632" slot="7" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,217,108" isLockPosition="false" oldDuration="3" oldSlot="13" oldDay="0" oldWeek="24" lastUpdate="12/04/2023 09:50" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="60370" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD2-TP2J" id="197"/>
			<resource fromWorkflow="false" nodeId="63035" nodeOrId="-1" quantity="1" category="category5" name="S4.A.01 : Développement d&apos;une application complexe" id="4341"/>
			<resource fromWorkflow="false" nodeId="60384" nodeOrId="60374" quantity="1" category="classroom" name="A105" id="161"/>
			<resource fromWorkflow="false" nodeId="60385" nodeOrId="60374" quantity="1" category="classroom" name="B103" id="61"/>
		</resources>
		<additional/>
	</event>
	<event id="12580" activityId="1655" session="0" repetition="0" name="Introduction à  la GSI" endHour="12:30" startHour="11:00" date="06/02/2024" absoluteSlot="3632" slot="7" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="153,255,51" isLockPosition="false" oldDuration="3" oldSlot="16" oldDay="0" oldWeek="23" lastUpdate="07/19/2023 08:43" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="21105" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD2-TP2D" id="72"/>
			<resource fromWorkflow="false" nodeId="20617" nodeOrId="-1" quantity="1" category="instructor" name="CONSTANT BLANDINE" id="2611"/>
			<resource fromWorkflow="false" nodeId="62739" nodeOrId="-1" quantity="1" category="category5" name="R2.10 Introduction à  la gestion des systèmes..." id="4380"/>
			<resource fromWorkflow="false" nodeId="18829" nodeOrId="18826" quantity="1" category="classroom" name="B101" id="58"/>
		</resources>
		<additional/>
	</event>
	<event id="13271" activityId="12901" session="0" repetition="3" name="SAÉ-S4.A.01 - 1G" endHour="17:00" startHour="15:30" date="06/02/2024" absoluteSlot="3641" slot="16" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,217,108" isLockPosition="false" oldDuration="3" oldSlot="22" oldDay="1" oldWeek="24" lastUpdate="01/17/2024 08:50" creation="07/19/2023 08:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="60367" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1-TP1G" id="90"/>
			<resource fromWorkflow="false" nodeId="63032" nodeOrId="-1" quantity="1" category="category5" name="S4.A.01 : Développement d&apos;une application complexe" id="4341"/>
			<resource fromWorkflow="false" nodeId="60375" nodeOrId="60371" quantity="1" category="classroom" name="A105" id="161"/>
			<resource fromWorkflow="false" nodeId="60379" nodeOrId="60371" quantity="1" category="classroom" name="B102" id="60"/>
		</resources>
		<additional/>
	</event>
	<event id="12931" activityId="1253" session="0" repetition="1" name="Qualité de développement outils" endHour="11:00" startHour="09:30" date="06/02/2024" absoluteSlot="3629" slot="4" day="1" week="24" additionalResources="0" duration="3" info="" note="" color="0,255,255" isLockPosition="false" oldDuration="3" oldSlot="1" oldDay="3" oldWeek="24" lastUpdate="01/08/2024 15:38" creation="07/18/2023 15:09" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="20783" nodeOrId="-1" quantity="1" category="trainee" name="INFO1-TD1-TP1B" id="67"/>
			<resource fromWorkflow="false" nodeId="20463" nodeOrId="-1" quantity="1" category="instructor" name="JEAN SEBASTIEN" id="4191"/>
			<resource fromWorkflow="false" nodeId="57513" nodeOrId="-1" quantity="1" category="category5" name="R2.03 Qualité de développement" id="574"/>
			<resource fromWorkflow="false" nodeId="17257" nodeOrId="17203" quantity="1" category="classroom" name="B103" id="61"/>
		</resources>
		<additional/>
	</event>
</events>`;
