<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <Lists>
            <Names>
                <xsl:for-each select="Hotels/Hotel">
                    <xsl:if test="substring-after(Name, 'Hilton')">
                         <Name>
                            <xsl:value-of select='Name'></xsl:value-of> 
                        </Name>
                    </xsl:if>    
                </xsl:for-each>
            </Names>
            <Prices>
                <xsl:for-each select="Hotels/Hotel">
                    <Price>
                        <xsl:value-of select="@Price"></xsl:value-of>
                    </Price>
                </xsl:for-each>
            </Prices>
            <Adresses>
                <xsl:for-each select="Hotels/Hotel/Address">
                    <xsl:if test="substring-after(AddressLine, 'New York')">
                        <Address>
                            <xsl:value-of select='AddressLine'></xsl:value-of> 
                        </Address>
                    </xsl:if>    
                </xsl:for-each>
            </Adresses>
        </Lists>
    </xsl:template>

</xsl:stylesheet>
