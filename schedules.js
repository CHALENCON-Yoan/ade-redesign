const dayExample = `<?xml version="1.0" encoding="UTF-8"?>
<events>
	<event id="164723" activityId="143872" session="0" repetition="0" name="ProbabilitÃ©s" endHour="12:30" startHour="11:00" date="02/09/2024" absoluteSlot="1920" slot="16" day="0" week="4" additionalResources="0" duration="6" info="" note="" color="172,230,0" isLockPosition="true" oldDuration="6" oldSlot="17" oldDay="0" oldWeek="4" lastUpdate="07/11/2024 14:47" creation="07/11/2024 13:58" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1116564" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1116565" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="74301"/>
			<resource fromWorkflow="false" nodeId="1116567" nodeOrId="-1" quantity="1" category="category5" name="R3.08 : ProbabilitÃ©s" id="70887"/>
			<resource fromWorkflow="false" nodeId="1116573" nodeOrId="1116568" quantity="1" category="classroom" name="A001" id="64184"/>
		</resources>
		<additional/>
	</event>
	<event id="165125" activityId="143695" session="0" repetition="0" name="Anglais" endHour="15:30" startHour="14:00" date="02/09/2024" absoluteSlot="1932" slot="28" day="0" week="4" additionalResources="0" duration="6" info="" note="" color="255,140,102" isLockPosition="false" oldDuration="6" oldSlot="29" oldDay="0" oldWeek="4" lastUpdate="08/29/2024 13:56" creation="07/11/2024 13:58" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115154" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1-TP1G" id="73867"/>
			<resource fromWorkflow="false" nodeId="1115155" nodeOrId="-1" quantity="1" category="instructor" name="METGE CECILE" id="74717"/>
			<resource fromWorkflow="false" nodeId="1115156" nodeOrId="-1" quantity="1" category="category5" name="R3.12 : Anglais" id="70877"/>
			<resource fromWorkflow="false" nodeId="1115162" nodeOrId="1115157" quantity="1" category="classroom" name="A204 - Sanako" id="65642"/>
		</resources>
		<additional/>
	</event>
	<event id="213288" activityId="143527" session="0" repetition="0" name="Architecture des rÃ©seaux" endHour="16:30" startHour="15:30" date="02/09/2024" absoluteSlot="1938" slot="34" day="0" week="4" additionalResources="0" duration="4" info="" note="" color="204,153,255" isLockPosition="false" oldDuration="6" oldSlot="35" oldDay="0" oldWeek="4" lastUpdate="08/28/2024 18:27" creation="08/28/2024 18:27" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1114031" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1114032" nodeOrId="-1" quantity="1" category="instructor" name="OBJOIS PHILIPPE" id="74174"/>
			<resource fromWorkflow="false" nodeId="1114033" nodeOrId="-1" quantity="1" category="category5" name="R3.06 : Architecture des rÃ©seaux" id="70896"/>
			<resource fromWorkflow="false" nodeId="1114035" nodeOrId="1114034" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
	<event id="164713" activityId="143693" session="0" repetition="0" name="RÃ©union de rentrÃ©e INFO2" endHour="11:00" startHour="10:30" date="02/09/2024" absoluteSlot="1918" slot="14" day="0" week="4" additionalResources="0" duration="2" info="" note="" color="230,230,230" isLockPosition="true" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="07/11/2024 14:47" creation="07/11/2024 10:10" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115116" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="363951" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="74301"/>
			<resource fromWorkflow="false" nodeId="364125" nodeOrId="364112" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
</events>`;

const weekExample = `<?xml version="1.0" encoding="UTF-8"?>
<events>
	<event id="213288" activityId="143527" session="0" repetition="0" name="Architecture des rÃ©seaux" endHour="16:30" startHour="15:30" date="02/09/2024" absoluteSlot="1938" slot="34" day="0" week="4" additionalResources="0" duration="4" info="" note="" color="204,153,255" isLockPosition="false" oldDuration="6" oldSlot="35" oldDay="0" oldWeek="4" lastUpdate="08/28/2024 18:27" creation="08/28/2024 18:27" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1114031" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1114032" nodeOrId="-1" quantity="1" category="instructor" name="OBJOIS PHILIPPE" id="74174"/>
			<resource fromWorkflow="false" nodeId="1114033" nodeOrId="-1" quantity="1" category="category5" name="R3.06 : Architecture des rÃ©seaux" id="70896"/>
			<resource fromWorkflow="false" nodeId="1114035" nodeOrId="1114034" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
	<event id="164797" activityId="143699" session="0" repetition="0" name="Communication professionnelle" endHour="17:00" startHour="15:30" date="05/09/2024" absoluteSlot="2142" slot="34" day="3" week="4" additionalResources="0" duration="6" info="" note="" color="153,255,255" isLockPosition="false" oldDuration="6" oldSlot="28" oldDay="0" oldWeek="4" lastUpdate="07/11/2024 15:20" creation="07/11/2024 13:59" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115216" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1" id="73771"/>
			<resource fromWorkflow="false" nodeId="1115217" nodeOrId="-1" quantity="1" category="instructor" name="DE SAUZA GUILLAUME" id="74645"/>
			<resource fromWorkflow="false" nodeId="1115218" nodeOrId="-1" quantity="1" category="category5" name="R3.13 : Communication professionnelle" id="70833"/>
			<resource fromWorkflow="false" nodeId="1115221" nodeOrId="1115219" quantity="1" category="classroom" name="B121" id="65603"/>
		</resources>
		<additional/>
	</event>
	<event id="193270" activityId="143889" session="0" repetition="0" name="Analyse" endHour="11:00" startHour="09:30" date="03/09/2024" absoluteSlot="1982" slot="10" day="1" week="4" additionalResources="0" duration="6" info="" note="" color="0,217,108" isLockPosition="false" oldDuration="6" oldSlot="10" oldDay="1" oldWeek="4" lastUpdate="07/19/2024 21:41" creation="07/11/2024 13:58" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="364358" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1" id="73771"/>
			<resource fromWorkflow="false" nodeId="1116682" nodeOrId="-1" quantity="1" category="instructor" name="OCCELLO MICHEL" id="74175"/>
			<resource fromWorkflow="false" nodeId="1116683" nodeOrId="-1" quantity="1" category="category5" name="R3.03 : Analyse" id="70779"/>
			<resource fromWorkflow="false" nodeId="1116687" nodeOrId="1116686" quantity="1" category="classroom" name="B117" id="65680"/>
		</resources>
		<additional/>
	</event>
	<event id="168235" activityId="52370" session="0" repetition="0" name="SAE S3" endHour="09:30" startHour="08:30" date="03/09/2024" absoluteSlot="1978" slot="6" day="1" week="4" additionalResources="0" duration="4" info="" note="" color="255,0,128" isLockPosition="false" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="07/17/2024 11:35" creation="07/17/2024 11:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="403236" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="403237" nodeOrId="-1" quantity="1" category="instructor" name="OCCELLO MICHEL" id="74175"/>
			<resource fromWorkflow="false" nodeId="403258" nodeOrId="403247" quantity="1" category="classroom" name="A001" id="64184"/>
		</resources>
		<additional/>
	</event>
	<event id="165936" activityId="143469" session="0" repetition="1" name="SQL dans un langage" endHour="16:30" startHour="15:00" date="03/09/2024" absoluteSlot="2004" slot="32" day="1" week="4" additionalResources="0" duration="6" info="" note="" color="214,184,133" isLockPosition="false" oldDuration="6" oldSlot="4" oldDay="3" oldWeek="4" lastUpdate="07/11/2024 15:10" creation="07/11/2024 14:50" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1113579" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1113580" nodeOrId="-1" quantity="1" category="instructor" name="BOULLE DIDIER" id="74760"/>
			<resource fromWorkflow="false" nodeId="1113581" nodeOrId="-1" quantity="1" category="category5" name="R3.07 : SQL dans un langage de programmation" id="70949"/>
			<resource fromWorkflow="false" nodeId="1113583" nodeOrId="1113582" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
	<event id="165120" activityId="143511" session="0" repetition="0" name="QualitÃ© de dÃ©veloppement" endHour="12:30" startHour="11:00" date="03/09/2024" absoluteSlot="1988" slot="16" day="1" week="4" additionalResources="0" duration="6" info="" note="" color="255,96,0" isLockPosition="true" oldDuration="6" oldSlot="4" oldDay="1" oldWeek="4" lastUpdate="07/11/2024 14:47" creation="07/11/2024 13:58" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1113883" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1" id="73771"/>
			<resource fromWorkflow="false" nodeId="1113884" nodeOrId="-1" quantity="1" category="instructor" name="JEAN SEBASTIEN" id="74138"/>
			<resource fromWorkflow="false" nodeId="1113885" nodeOrId="-1" quantity="1" category="category5" name="R3.04 : QualitÃ© de dÃ©veloppement" id="70950"/>
			<resource fromWorkflow="false" nodeId="1113891" nodeOrId="1113886" quantity="1" category="classroom" name="B210" id="65595"/>
		</resources>
		<additional/>
	</event>
	<event id="165025" activityId="143495" session="0" repetition="0" name="Programmation systÃ¨me" endHour="15:00" startHour="14:00" date="05/09/2024" absoluteSlot="2136" slot="28" day="3" week="4" additionalResources="0" duration="4" info="" note="" color="0,128,255" isLockPosition="false" oldDuration="4" oldSlot="30" oldDay="3" oldWeek="4" lastUpdate="07/17/2024 11:24" creation="07/11/2024 14:22" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1113844" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1113846" nodeOrId="-1" quantity="1" category="instructor" name="RAIEVSKY CLEMENT" id="74597"/>
			<resource fromWorkflow="false" nodeId="1113847" nodeOrId="-1" quantity="1" category="category5" name="R3.05 : Programmation systÃ¨me" id="70917"/>
			<resource fromWorkflow="false" nodeId="1113856" nodeOrId="1113850" quantity="1" category="classroom" name="B018" id="64655"/>
		</resources>
		<additional/>
	</event>
	<event id="165914" activityId="143469" session="0" repetition="0" name="SQL dans un langage" endHour="12:30" startHour="11:00" date="04/09/2024" absoluteSlot="2056" slot="16" day="2" week="4" additionalResources="0" duration="6" info="" note="" color="214,184,133" isLockPosition="false" oldDuration="6" oldSlot="4" oldDay="3" oldWeek="4" lastUpdate="07/11/2024 15:09" creation="07/11/2024 14:50" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1113579" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1113580" nodeOrId="-1" quantity="1" category="instructor" name="BOULLE DIDIER" id="74760"/>
			<resource fromWorkflow="false" nodeId="1113581" nodeOrId="-1" quantity="1" category="category5" name="R3.07 : SQL dans un langage de programmation" id="70949"/>
			<resource fromWorkflow="false" nodeId="1113583" nodeOrId="1113582" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
	<event id="165106" activityId="143820" session="0" repetition="0" name="DÃ©veloppement efficace" endHour="15:00" startHour="14:00" date="03/09/2024" absoluteSlot="2000" slot="28" day="1" week="4" additionalResources="0" duration="4" info="" note="" color="255,223,0" isLockPosition="false" oldDuration="4" oldSlot="38" oldDay="3" oldWeek="4" lastUpdate="07/11/2024 15:01" creation="07/11/2024 13:57" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1116208" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1116209" nodeOrId="-1" quantity="1" category="instructor" name="LUCCI ALAIN" id="74578"/>
			<resource fromWorkflow="false" nodeId="1116210" nodeOrId="-1" quantity="1" category="category5" name="R3.02 : DÃ©veloppement efficace" id="70903"/>
			<resource fromWorkflow="false" nodeId="1116213" nodeOrId="1116212" quantity="1" category="classroom" name="B001" id="65587"/>
		</resources>
		<additional/>
	</event>
	<event id="164830" activityId="143713" session="0" repetition="0" name="PPP" endHour="11:00" startHour="09:30" date="04/09/2024" absoluteSlot="2050" slot="10" day="2" week="4" additionalResources="0" duration="6" info="" note="" color="0,115,115" isLockPosition="true" oldDuration="6" oldSlot="39" oldDay="3" oldWeek="4" lastUpdate="07/11/2024 14:47" creation="07/11/2024 14:02" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115450" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1" id="73771"/>
			<resource fromWorkflow="false" nodeId="1115451" nodeOrId="-1" quantity="1" category="instructor" name="DE SAUZA GUILLAUME" id="74645"/>
			<resource fromWorkflow="false" nodeId="1115452" nodeOrId="-1" quantity="1" category="category5" name="R3.14 : Projet personnel et professionnel" id="70918"/>
			<resource fromWorkflow="false" nodeId="1115454" nodeOrId="1115453" quantity="1" category="classroom" name="B117" id="65680"/>
		</resources>
		<additional/>
	</event>
	<event id="165373" activityId="143895" session="0" repetition="1" name="DÃ©veloppement web" endHour="11:00" startHour="10:00" date="06/09/2024" absoluteSlot="2188" slot="12" day="4" week="4" additionalResources="0" duration="4" info="" note="" color="166,0,124" isLockPosition="false" oldDuration="4" oldSlot="4" oldDay="4" oldWeek="4" lastUpdate="07/17/2024 11:24" creation="07/11/2024 14:36" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1116741" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1116743" nodeOrId="-1" quantity="1" category="instructor" name="GENTHIAL DAMIEN" id="74594"/>
			<resource fromWorkflow="false" nodeId="1116744" nodeOrId="-1" quantity="1" category="category5" name="R3.01 : DÃ©veloppement web" id="70828"/>
			<resource fromWorkflow="false" nodeId="1116749" nodeOrId="1116747" quantity="1" category="classroom" name="B018" id="64655"/>
		</resources>
		<additional/>
	</event>
	<event id="165125" activityId="143695" session="0" repetition="0" name="Anglais" endHour="15:30" startHour="14:00" date="02/09/2024" absoluteSlot="1932" slot="28" day="0" week="4" additionalResources="0" duration="6" info="" note="" color="255,140,102" isLockPosition="false" oldDuration="6" oldSlot="29" oldDay="0" oldWeek="4" lastUpdate="08/29/2024 13:56" creation="07/11/2024 13:58" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115154" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1-TP1G" id="73867"/>
			<resource fromWorkflow="false" nodeId="1115155" nodeOrId="-1" quantity="1" category="instructor" name="METGE CECILE" id="74717"/>
			<resource fromWorkflow="false" nodeId="1115156" nodeOrId="-1" quantity="1" category="category5" name="R3.12 : Anglais" id="70877"/>
			<resource fromWorkflow="false" nodeId="1115162" nodeOrId="1115157" quantity="1" category="classroom" name="A204 - Sanako" id="65642"/>
		</resources>
		<additional/>
	</event>
	<event id="164814" activityId="143699" session="0" repetition="1" name="Communication professionnelle" endHour="12:30" startHour="11:00" date="05/09/2024" absoluteSlot="2124" slot="16" day="3" week="4" additionalResources="0" duration="6" info="" note="" color="153,255,255" isLockPosition="true" oldDuration="6" oldSlot="17" oldDay="3" oldWeek="4" lastUpdate="07/11/2024 14:47" creation="07/11/2024 13:59" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1115216" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1" id="73771"/>
			<resource fromWorkflow="false" nodeId="1115217" nodeOrId="-1" quantity="1" category="instructor" name="DE SAUZA GUILLAUME" id="74645"/>
			<resource fromWorkflow="false" nodeId="1115218" nodeOrId="-1" quantity="1" category="category5" name="R3.13 : Communication professionnelle" id="70833"/>
			<resource fromWorkflow="false" nodeId="1115221" nodeOrId="1115219" quantity="1" category="classroom" name="B121" id="65603"/>
		</resources>
		<additional/>
	</event>
	<event id="164981" activityId="48966" session="0" repetition="0" name="Cryptographie" endHour="15:00" startHour="14:00" date="04/09/2024" absoluteSlot="2068" slot="28" day="2" week="4" additionalResources="0" duration="4" info="" note="" color="140,140,0" isLockPosition="true" oldDuration="4" oldSlot="6" oldDay="1" oldWeek="4" lastUpdate="07/11/2024 14:47" creation="07/11/2024 13:58" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="298530" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="298542" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="74301"/>
			<resource fromWorkflow="false" nodeId="299704" nodeOrId="-1" quantity="1" category="category5" name="R3.09 : Cryptographie et sÃ©curitÃ©" id="70780"/>
			<resource fromWorkflow="false" nodeId="299113" nodeOrId="299027" quantity="1" category="classroom" name="E001" id="65714"/>
		</resources>
		<additional/>
	</event>
	<event id="165199" activityId="143479" session="0" repetition="0" name="DÃ©veloppement efficace" endHour="12:30" startHour="11:00" date="06/09/2024" absoluteSlot="2192" slot="16" day="4" week="4" additionalResources="0" duration="6" info="" note="" color="255,223,0" isLockPosition="true" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="07/11/2024 14:47" creation="07/11/2024 14:29" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1113731" nodeOrId="-1" quantity="1" category="trainee" name="INFO2-TD1" id="73771"/>
			<resource fromWorkflow="false" nodeId="1113732" nodeOrId="-1" quantity="1" category="instructor" name="LUCCI ALAIN" id="74578"/>
			<resource fromWorkflow="false" nodeId="1113733" nodeOrId="-1" quantity="1" category="category5" name="R3.02 : DÃ©veloppement efficace" id="70903"/>
			<resource fromWorkflow="false" nodeId="1113735" nodeOrId="1113734" quantity="1" category="classroom" name="B117" id="65680"/>
		</resources>
		<additional/>
	</event>
	<event id="155978" activityId="143895" session="0" repetition="2" name="DÃ©veloppement web" endHour="09:30" startHour="08:30" date="04/09/2024" absoluteSlot="2046" slot="6" day="2" week="4" additionalResources="0" duration="4" info="" note="" color="166,0,124" isLockPosition="false" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="07/17/2024 11:24" creation="07/17/2024 02:33" isLockResources="false" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1116741" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1116743" nodeOrId="-1" quantity="1" category="instructor" name="GENTHIAL DAMIEN" id="74594"/>
			<resource fromWorkflow="false" nodeId="1116744" nodeOrId="-1" quantity="1" category="category5" name="R3.01 : DÃ©veloppement web" id="70828"/>
			<resource fromWorkflow="false" nodeId="371732" nodeOrId="1116747" quantity="1" category="classroom" name="E001" id="65714"/>
		</resources>
		<additional/>
	</event>
	<event id="164723" activityId="143872" session="0" repetition="0" name="ProbabilitÃ©s" endHour="12:30" startHour="11:00" date="02/09/2024" absoluteSlot="1920" slot="16" day="0" week="4" additionalResources="0" duration="6" info="" note="" color="172,230,0" isLockPosition="true" oldDuration="6" oldSlot="17" oldDay="0" oldWeek="4" lastUpdate="07/11/2024 14:47" creation="07/11/2024 13:58" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
		<resources>
			<resource fromWorkflow="false" nodeId="1116564" nodeOrId="-1" quantity="1" category="trainee" name="INFO2" id="73770"/>
			<resource fromWorkflow="false" nodeId="1116565" nodeOrId="-1" quantity="1" category="instructor" name="CHARENSOL SYLVAIN" id="74301"/>
			<resource fromWorkflow="false" nodeId="1116567" nodeOrId="-1" quantity="1" category="category5" name="R3.08 : ProbabilitÃ©s" id="70887"/>
			<resource fromWorkflow="false" nodeId="1116573" nodeOrId="1116568" quantity="1" category="classroom" name="A001" id="64184"/>
		</resources>
		<additional/>
	</event>
	<event id="164713" activityId="143693" session="0" repetition="0" name="RÃ©union de rentrÃ©e INFO2" endHour="11:00" startHour="10:30" date="02/09/2024" absoluteSlot="1918" slot="14" day="0" week="4" additionalResources="0" duration="2" info="" note="" color="230,230,230" isLockPosition="true" oldDuration="-1" oldSlot="-1" oldDay="-1" oldWeek="-1" lastUpdate="07/11/2024 14:47" creation="07/11/2024 10:10" isLockResources="true" isSoftKeepResources="false" isNoteLock="false" isStrongLock="false">
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
